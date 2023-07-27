"use client";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";

import { MainMenu } from "@components/MainMenu/MainMenu";
import { MenuStructure } from "@components/MainMenu/utils/menuStructure";
import { useHasMounted } from "@hooks/useHasMounted";
import { useHeader } from "@hooks/useHeader";
import { errorHandler } from "@utils/errorHandler";
import styles from "./Header.module.scss";

export function HeaderClient({ structure }: { structure: MenuStructure }) {
  const headerRef: RefObject<HTMLElement> = useRef(null);
  const mounted = useHasMounted();

  useHeader(headerRef);
  useEffect(() => {
    import("@suits/ss-design-system/dist/components/ss-icon")
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(errorHandler);
    import("@suits/ss-design-system/dist/components/ss-logo")
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(errorHandler);
  });

  if (!mounted) {
    return null;
  }

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.header__section}>
        <MainMenu structure={structure} />
      </div>
      <div className={styles.header__section}>
        <Link href="/">
          <ss-logo></ss-logo>
        </Link>
      </div>
      <div className={styles.header__section}>
        <div className={styles.header__section__btn}>
          <Link href="/account" prefetch={false}>
            <ss-icon icon="profile" aria-hidden="true"></ss-icon>
            <span className="sr-only">Account</span>
          </Link>
        </div>
        <div className={styles.header__section__btn}>
          <Link href="/wishlist" prefetch={false}>
            <ss-icon icon="bookmark" aria-hidden="true"></ss-icon>
            <span className="sr-only">Whislist</span>
          </Link>
        </div>
        <div className={styles.header__section__btn}>
          <Link href="/cart" prefetch={false}>
            <ss-icon icon="bag" aria-hidden="true"></ss-icon>
            <span className="sr-only">View bag</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
