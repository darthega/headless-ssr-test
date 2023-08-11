import {
  NavigationGroup,
  NavigationItem,
  NavigationItemLable,
  NavigationLink,
  SuSuNavigationMenuCollection,
} from "@gql/generated/graphql";
import { CloudinaryImage } from "@headless-commerce/types/cloudinaryImage";

export type LevelKey = "level1" | "level2" | "level3";
export type SubmenuText = {
  text: string;
  link: NavigationLink;
  icon: CloudinaryImage[] | null;
  type: "SubmenuText";
};
export type LevelValue = (NavigationGroup | SubmenuText) & {
  parentItem: string;
};
export type MenuStructure = Record<LevelKey, LevelValues>;
type LevelValues = LevelValue[];

let fullData: SuSuNavigationMenuCollection;

const _mergeStructures = (
  target: MenuStructure | Partial<MenuStructure>,
  modified: Partial<MenuStructure>
): MenuStructure | Partial<MenuStructure> => {
  const newStructure: MenuStructure | Partial<MenuStructure> = {};

  Object.keys(modified).forEach((key) => {
    const levelKey = key as LevelKey;
    const levelStructure: LevelValues = [
      ...(target[levelKey] ?? []),
      ...(modified[levelKey] ?? []),
    ];
    newStructure[levelKey] = levelStructure;
  });

  return newStructure;
};

const _itemStructure = (
  item: NavigationItem,
  level: number
): Partial<MenuStructure> => {
  let itemStructure: Partial<MenuStructure> = {};
  const hasChildGroups = Boolean(item?.groupsCollection?.items?.length);

  if (hasChildGroups) {
    const hasSubMenuText = Boolean(item?.label?.subMenuText);
    const nextLevel = level + 1;
    const nextKey = `level${nextLevel}` as LevelKey;

    item?.groupsCollection?.items.forEach((group) => {
      const groupStructure = _groupStructure(
        group as NavigationGroup,
        nextLevel,
        item.sys.id
      );
      itemStructure = Object.assign(
        itemStructure,
        _mergeStructures(itemStructure, groupStructure)
      );
    });

    if (hasSubMenuText) {
      const { subMenuText, link, icon } = item.label as NavigationItemLable;

      const subMenu: SubmenuText = {
        text: subMenuText as string,
        link: link as NavigationLink,
        icon,
        type: "SubmenuText",
      };
      itemStructure[nextKey] = [
        { ...subMenu, parentItem: item.sys.id },
        ...(itemStructure[nextKey] ?? []),
      ];
    }
  }

  return itemStructure;
};

const _groupStructure = (
  group: NavigationGroup,
  level: number,
  parentItem = "none"
): Partial<MenuStructure> => {
  let groupStructure: Partial<MenuStructure> = {};

  const levelKey = `level${level}` as LevelKey;
  const levelGroups: LevelValues = groupStructure[levelKey] ?? [];

  groupStructure[levelKey] = [...levelGroups, { ...group, parentItem }];

  (group.itemsCollection?.items ?? []).forEach((item) => {
    const newStructure = _itemStructure(item as NavigationItem, level);
    groupStructure = Object.assign(
      groupStructure,
      _mergeStructures(groupStructure, newStructure)
    );
  });

  return groupStructure;
};

export const menuStructure = (
  menuData: SuSuNavigationMenuCollection
): MenuStructure => {
  let structure: MenuStructure = {
    level1: [],
    level2: [],
    level3: [],
  };

  if (!menuData?.items?.length) { return structure; };

  const [baseMenu] = menuData.items;

  baseMenu?.groupCollection?.items.forEach((group) => {
    const groupStructure: Partial<MenuStructure> = _groupStructure(
      group as NavigationGroup,
      1
    );
    structure = Object.assign(
      structure,
      _mergeStructures(structure, groupStructure)
    );
  });

  return structure;
};
