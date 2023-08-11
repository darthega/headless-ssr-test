import Image from 'next/image';

import { SubmenuText } from '@components/MainMenu/utils/menuStructure';
import { useCountry } from '@hooks/useCountry';
import { generateUrlFromLinkContent } from '@utils/UrlGenerator';
import styles from './NavigationSubMenuText.module.scss';

export function NaviagtionSubMenuText({ subMenu, visible }: { subMenu: SubmenuText; visible: boolean }) {
  const { icon, text, link } = subMenu;
  const { siteID, locale } = useCountry();

  return (
    <li
      className={`${styles['navigation-item-submenu']} title-03-light`}
      style={{ display: `${visible ? 'flex' : 'none'}` }}
    >
      {icon?.length && <Image src={icon[0].secure_url} width="20" height="20" alt={text} />}
      <ss-link
        icon="arrow_cta"
        icon-position="end"
        full-width={false}
        label={text}
        href={generateUrlFromLinkContent(link, siteID, locale)}
      ></ss-link>
    </li>
  );
}
