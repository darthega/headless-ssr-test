"use client";
import { RefObject, useEffect, useRef } from "react";

import styles from "@components/Header/Header.module.scss";
import { GoogleTagManagerEvents } from "@headless-commerce/types/GoogleTagManagerEvents";
import useGAEventGtm from "@hooks/useGAEventGtm";
import { errorHandler } from "@utils/errorHandler";
import { MenuStructure } from "./utils/menuStructure";
import { useHasMounted } from "@headless-commerce/hooks/useHasMounted";
import { NavigationMenu } from "@components/NavigationMenu/NavigationMenu";
import { Icon } from "@components/Icon/Icon";

export function MainMenu({ structure }: { structure: MenuStructure }) {
  const menuPanelRef: RefObject<HTMLSsSideSliderElement> = useRef(null);
  const [handleGAEventGtm] = useGAEventGtm();
  const mounted = useHasMounted();

  useEffect(() => {
    import("@suits/ss-design-system/dist/components/ss-side-slider")
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(errorHandler);
  });

  if (!mounted) {
    return null;
  }

  const _onMenuClick = () => {
    menuPanelRef.current?.toggle().catch(errorHandler);

    handleGAEventGtm(GoogleTagManagerEvents.GA_EVENT, {
      eventCategory: "Global_Interactions",
      eventAction: "Opened_Menu",
      eventLabel: "white",
    });
  };

  return (
    <>
      <button className={styles.header__section__btn} onClick={_onMenuClick}>
        <Icon icon="menu" aria-hidden="true"></Icon>
        <span className="sr-only">Menu</span>
      </button>
      <ss-side-slider
        className="navigation-slider"
        ref={menuPanelRef}
        hide-close-button="all"
        mobile-overlay={true}
        position="left"
      >
        <NavigationMenu structure={structure} />

        {/* <NavigationMenu
          // sideSliderRefference={menuPanelRef}
          structure={structure}
        /> */}
      </ss-side-slider>
    </>
  );
}
