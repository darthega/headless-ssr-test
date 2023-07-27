"use client";
import { RefObject, useEffect, useRef } from "react";

import styles from "@components/Header/Header.module.scss";
import { GoogleTagManagerEvents } from "@headless-commerce/types/GoogleTagManagerEvents";
import useGAEventGtm from "@hooks/useGAEventGtm";
import { errorHandler } from "@utils/errorHandler";
import { MenuStructure } from "./utils/menuStructure";

export function MainMenu({ structure }: { structure: MenuStructure }) {
  const menuPanelRef: RefObject<HTMLSsSideSliderElement> = useRef(null);
  const [handleGAEventGtm] = useGAEventGtm();

  useEffect(() => {
    import("@suits/ss-design-system/dist/components/ss-icon")
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(errorHandler);
    import("@suits/ss-design-system/dist/components/ss-side-slider")
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(errorHandler);
  });

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
        <ss-icon icon="menu" aria-hidden="true"></ss-icon>
        <span className="sr-only">Menu</span>
      </button>
      <ss-side-slider
        className="navigation-slider"
        ref={menuPanelRef}
        hide-close-button="all"
        mobile-overlay={true}
        position="left"
      >
        <pre>{JSON.stringify(structure, null, 2)}</pre>
        {/* <NavigationMenu
          sideSliderRefference={menuPanelRef}
          structure={structure}
        /> */}
      </ss-side-slider>
    </>
  );
}
