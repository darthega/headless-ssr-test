"use client";
import Link from "next/link";
import { useEffect } from "react";

import { useHasMounted } from "@hooks/useHasMounted";
import { errorHandler } from "@utils/errorHandler";

export function CenterSection() {
  const hasMounted = useHasMounted();

  useEffect(() => {
    import("@suits/ss-design-system/dist/components/ss-logo").then(
      ({ defineCustomElement }) => defineCustomElement()
    ).catch(errorHandler);
  });

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Link href="/">
        <ss-logo></ss-logo>
      </Link>
    </>
  );
}
