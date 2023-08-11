"use client";
import { useEffect, useRef, useState } from "react";

import {
  LevelValue,
  MenuStructure,
  SubmenuText,
} from "@components/MainMenu/utils/menuStructure";
import { NaviagtionSubMenuText } from "@components/NavigationSubMenuText/NavigationSubMenuText";
import { NavigationGroup, PromotionEvents } from "@gql/generated/graphql";
import { GoogleTagManagerEvents } from "@headless-commerce/types/GoogleTagManagerEvents";
import { EMenuLevel } from "@headless-commerce/types/NavigationMenu.types";
import { useHasMounted } from "@hooks/useHasMounted";
import { usePromotionGtm } from "@hooks/usePromotionGtm";
import { errorHandler } from "@utils/errorHandler";
import NavigationMenuGroup from "@components/NavigationMenuGroup/NavigationMenuGroup";
import styles from "./NavigationMenu.module.scss";

export type NavigationMenuItemClickArgs = {
  id: string;
  promotionEvents?: PromotionEvents;
  hasChildren: boolean;
};

export function NavigationMenu({ structure }: { structure: MenuStructure }) {
  const screenSliderRef = useRef<HTMLSsScreenSliderElement>(null);
  const [handlePromotionGtm] = usePromotionGtm();
  const mounted = useHasMounted();

  const [sliderMounted, setSliderMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("none");
  const [parentItem, setParentItem] = useState<string>("none");
  const [activeMenuLevel, setActiveMenuLevel] = useState<EMenuLevel>(
    EMenuLevel.LEVEL1
  );

  useEffect(() => {
    if (!sliderMounted) {
      import("@suits/ss-design-system/dist/components/ss-screen-slider")
        .then(({ defineCustomElement }) => {
          defineCustomElement();
          setSliderMounted(true);
        })
        .catch(errorHandler);
    } else {
      if (screenSliderRef?.current) {
        screenSliderRef.current.slideList = [
          EMenuLevel.LEVEL1,
          EMenuLevel.LEVEL2,
          EMenuLevel.LEVEL3,
        ];

        screenSliderRef?.current?.slideTo(EMenuLevel.LEVEL1);
      }
    }

    // if (sideSliderRefference?.current) {
    //   sideSliderRefference.current.addEventListener("sideSlideClose", () => {
    //     setSelectedItem("none");
    //     setParentItem("none");
    //     setSearchActive(true);
    //     _setActiveMenuLevelHelper(EMenuLevel.LEVEL1);
    //   });
    // }
  }, [sliderMounted]);

  if (!mounted) {
    return null;
  }

  // Helpers.
  function _setActiveMenuLevelHelper(setMenuLevel: any) {
    setActiveMenuLevel(setMenuLevel);
    screenSliderRef?.current?.slideTo(setMenuLevel);
  }

  // Event handlers.
  const _handleBackButtonClick = (): void => {
    const targetParent: string = 'none';
    let targetSelected: string = 'none';
    let targetLevel: EMenuLevel = EMenuLevel.LEVEL1;

    if (activeMenuLevel === EMenuLevel.LEVEL3) {
      targetLevel = EMenuLevel.LEVEL2;
      targetSelected = parentItem;
    }

    setSelectedItem(targetSelected);
    setParentItem(targetParent);

    _setActiveMenuLevelHelper(targetLevel);
  };
  
  const _handleNavigationItemClick = ({
    id,
    hasChildren,
    parentItem,
    promotionEvents,
  }: NavigationMenuItemClickArgs & { parentItem: string }) => {
    if (hasChildren) {
      setSelectedItem(id);
      setParentItem(parentItem);

      switch (activeMenuLevel) {
        case EMenuLevel.LEVEL1:
          _setActiveMenuLevelHelper(EMenuLevel.LEVEL2);
          break;
        case EMenuLevel.LEVEL2:
          _setActiveMenuLevelHelper(EMenuLevel.LEVEL3);
          break;
        default:
          break;
      }
    }

    if (promotionEvents?.promotionClick) {
      handlePromotionGtm(GoogleTagManagerEvents.PROMOTION_CLICK, "promoClick", {
        id: promotionEvents?.promotionClick,
        name: promotionEvents?.promotionClick,
      });
    }
  };

  const _renderSubMenuText = (
    subMenuText: SubmenuText & { parentItem: string },
    visible: boolean
  ) => {
    return (
      <NaviagtionSubMenuText
        key={`${JSON.stringify(subMenuText)}`}
        subMenu={subMenuText}
        visible={visible}
      />
    );
  };

  const _renderGroup = (
    group: NavigationGroup & { parentItem: string },
    visible: boolean
  ) => {
    return (
      <>
        <NavigationMenuGroup
          key={(group as NavigationGroup)?.sys?.id}
          group={group as NavigationGroup}
          visible={visible}
          handleNavigationItemClick={(config: NavigationMenuItemClickArgs) => {
            _handleNavigationItemClick({
              ...config,
              parentItem: group.parentItem,
            });
          }}
        />
      </>
    );
  };

  const _renderLevelItem = (levelItem: LevelValue, i: number) => {
    if (!levelItem) {
      return null;
    }

    const visible = levelItem?.parentItem === selectedItem;

    return (levelItem as any).type === "SubmenuText"
      ? _renderSubMenuText(
          levelItem as SubmenuText & { parentItem: string },
          visible
        )
      : _renderGroup(
          levelItem as NavigationGroup & { parentItem: string },
          visible
        );
  };

  return (
    <>
      {activeMenuLevel !== EMenuLevel.LEVEL1 ? (
        <div
          className={styles["navigation-menu__back-button"]}
          onClick={_handleBackButtonClick}
        >
          <ss-icon icon="arrow_left" aria-label="Menu back button" />
        </div>
      ) : null}
      <ss-screen-slider
        ref={screenSliderRef}
        initial-slide={EMenuLevel.LEVEL1}
        slide-in-direction="left"
        transition-duration="0.3s"
        transition-timing-function="ease"
      >
        <div slot={EMenuLevel.LEVEL1}>
          {structure?.[EMenuLevel.LEVEL1]?.map(_renderLevelItem)}
        </div>
        <div slot={EMenuLevel.LEVEL2}>
          {structure?.[EMenuLevel.LEVEL2]?.map(_renderLevelItem)}
        </div>
        <div slot={EMenuLevel.LEVEL3}>
          {structure?.[EMenuLevel.LEVEL3]?.map(_renderLevelItem)}
        </div>
      </ss-screen-slider>
    </>
  );
}
