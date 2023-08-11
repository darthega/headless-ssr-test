"use client";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';

import { NavigationMenuItemClickArgs } from '@components/NavigationMenu/NavigationMenu';
import {PriceInfo} from '@components/PriceInfo/PriceInfo';
import { NavigationItem, PromotionEvents } from '@gql/generated/graphql';
import { useCountry } from '@hooks/useCountry';
import { generateUrlFromLinkContent } from '@utils/UrlGenerator';
import styles from './NavigationMenuItem.module.scss';
import { SsLink } from '@components/SsLink/SsLink';

export enum ENavigationMenuItemFontStyle {
  SMALL = 'Small',
  NORMAL = 'Normal',
  LARGE = 'Large'
}

const _entryMap = new Map();
const _createRenderOptions = () => {
  return {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        const entry = _entryMap.get(node?.data?.target?.sys?.id);
        const priceValue = entry?.pricesCollection?.items['0']?.priceValue;

        return <PriceInfo price={priceValue} />;
      },
    },
  };
};

export function NavigationMenuItem ({
  handleNavigationItemClick,
  item,
  fontStyling,
}: {
  handleNavigationItemClick: (config: NavigationMenuItemClickArgs) => void;
  id: string;
  item: NavigationItem;
  fontStyling: string;
}) {
  const { siteID, locale } = useCountry();
  const hasChildren = Boolean(item?.groupsCollection?.items?.length);
  const icon = hasChildren ? 'arrow_right' : undefined;
  const label = item?.label?.text;
  const linkUrl =
    item?.label?.link && !item?.label?.subMenuText ? generateUrlFromLinkContent(item?.label?.link, siteID, locale) : '';
  let _navigationItemClasses: string = '';

  switch (fontStyling) {
    case ENavigationMenuItemFontStyle.LARGE:
      _navigationItemClasses = 'title-03-light';
      break;
    case ENavigationMenuItemFontStyle.NORMAL:
      _navigationItemClasses = 'body-light';
      break;
    case ENavigationMenuItemFontStyle.SMALL:
      _navigationItemClasses = 'body-small-light-sm body-light-lg';
      break;
    default:
      _navigationItemClasses = 'body-light';
  }

  // Loop through the inline linked entries and add them to the map.
  for (const entry of item?.label?.subText?.links?.entries.inline ?? []) {
    if (entry && 'sys' in entry) {
      _entryMap.set(entry?.sys?.id, entry);
    }
  }

  const _renderOptions = _createRenderOptions();

  return (
    <>
      <li
        className={`
          ${styles['navigation-item']} 
          ${_navigationItemClasses} 
          ${item?.label?.icon?.length ? styles['navigation-item--has-icon'] : ''}
        `}
        role="menuitem"
      >
        {item?.label?.icon?.map((icon: any) => {
          return (
            <div className={styles['navigation-item__navigation-icon']} key={icon?.secure_url}>
              <Image alt="navigation-icon" src={icon?.secure_url} width={20} height={20} />
            </div>
          );
        })}
        <SsLink
          className={styles['navigation-item__cta']}
          onLinkClick={() =>
            handleNavigationItemClick({
              id: item?.sys?.id,
              promotionEvents: item?.label?.promotionEvents as PromotionEvents,
              hasChildren,
            })
          }
          full-width={true}
          icon-position="end"
          icon={icon}
          label={label ?? undefined}
          href={linkUrl}
        >
          {item?.label?.subText && (
            <span className="body-small-light">
              {documentToReactComponents(item?.label?.subText?.json, _renderOptions)}
            </span>
          )}
        </SsLink>
      </li>
    </>
  );
};