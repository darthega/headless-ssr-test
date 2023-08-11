import { NavigationMenuItemClickArgs } from '@components/NavigationMenu/NavigationMenu';
import { NavigationMenuItem } from '@components/NavigationMenuItem/NavigationMenuItem';
import { NavigationGroup, NavigationItem } from '@gql/generated/graphql';
import styles from './NavigationMenuGroup.module.scss';

const NavigationMenuGroup = ({
  visible,
  group,
  handleNavigationItemClick,
}: {
  visible: boolean;
  group: NavigationGroup;
  handleNavigationItemClick: (config: NavigationMenuItemClickArgs) => void;
}) => {
  const { text, fontStyling, hasTopDivider, itemsCollection } = group;

  return (
    <ul className="menu-group" role="menu" style={{ display: `${visible ? 'initial' : 'none'}` }}>
      {hasTopDivider && <div className={styles['menu-group__top-offset']}></div>}
      {text?.length && <span className={`${styles['menu-group__title']} brow-header-regular`}>{text}</span>}

      {(itemsCollection?.items as NavigationItem[])?.map(item => {
        return (
          <NavigationMenuItem
            key={item?.sys?.id}
            id={item?.sys?.id}
            item={item}
            handleNavigationItemClick={handleNavigationItemClick}
            fontStyling={fontStyling ?? ''}
          />
        );
      })}
    </ul>
  );
};

export default NavigationMenuGroup;
