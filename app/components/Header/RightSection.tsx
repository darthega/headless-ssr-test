"use client";
import Link from "next/link";
import { useEffect } from "react";

import { useHasMounted } from "@hooks/useHasMounted";
import { errorHandler } from "@utils/errorHandler";
import styles from "./Header.module.scss";

export function RightSection() {
  const hasMounted = useHasMounted();
  useEffect(() => {
    import("@suits/ss-design-system/dist/components/ss-icon")
      .then(({ defineCustomElement }) => defineCustomElement())
      .catch(errorHandler);
  });

  if (!hasMounted) {
    return null;
  }

  return (
    <>
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
    </>
  );
}
