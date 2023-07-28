import React from "react";
import styles from "./Logo.module.scss";
import Image from "next/image";

type SsLogoVariation = "light" | "dark";
type SsLogoMode = "suitsupply" | "outlet";
type SsLogoSVGKey = `${SsLogoMode}-${SsLogoVariation}`;

interface SsLogoProps {
  mode?: SsLogoMode;
  variation?: SsLogoVariation;
}

const SVGBasePath = "https://cdn.suitsupply.com/image/upload/svg";

const SVGMap: Map<SsLogoSVGKey, string> = new Map([
  ["suitsupply-dark", "suitsupply_dark.svg"],
  ["suitsupply-light", "suitsupply_light.svg"],
  ["outlet-light", "outlet_light.svg"],
  ["outlet-dark", "outlet_dark.svg"],
]);

export function Logo({ mode = "suitsupply", variation = "dark" }: SsLogoProps) {
  const SVGKey: SsLogoSVGKey = `${mode}-${variation}`;

  return (
    <div className={styles.host}>
      <Image
        unoptimized={true}
        src={`${SVGBasePath}/${SVGMap.get(SVGKey)}`}
        alt={`Suitsupply ${mode === "suitsupply" ? "" : mode}`}
        width={mode === "suitsupply" ? 140 : 215}
        height={20}
      />
    </div>
  );
}
