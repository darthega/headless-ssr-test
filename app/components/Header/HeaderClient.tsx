"use client";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";

import { MainMenu } from "@components/MainMenu/MainMenu";
import { MenuStructure } from "@components/MainMenu/utils/menuStructure";
import { NavigationMenu } from "@components/NavigationMenu/NavigationMenu";
import { useHasMounted } from "@hooks/useHasMounted";
import { useHeader } from "@hooks/useHeader";
import styles from "./Header.module.scss";
import { Icon } from "@components/Icon/Icon";
import { Logo } from "@components/Logo/Logo";

export function HeaderClient({ structure }: { structure: MenuStructure }) {
  const headerRef: RefObject<HTMLElement> = useRef(null);
  const mounted = useHasMounted();

  useHeader(headerRef);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <div className={styles.header__section}>
          <MainMenu structure={structure} />
        </div>
        <div className={styles.header__section}>
          <Link href="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className={styles.header__section}>
          <div className={styles.header__section__btn}>
            <Link href="/account" prefetch={false}>
              <Icon icon="profile" aria-hidden="true"></Icon>
              <span className="sr-only">Account</span>
            </Link>
          </div>
          <div className={styles.header__section__btn}>
            <Link href="/wishlist" prefetch={false}>
              <Icon icon="bookmark" aria-hidden="true"></Icon>
              <span className="sr-only">Whislist</span>
            </Link>
          </div>
          <div className={styles.header__section__btn}>
            <Link href="/cart" prefetch={false}>
              <Icon icon="bag" aria-hidden="true"></Icon>
              <span className="sr-only">View bag</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
