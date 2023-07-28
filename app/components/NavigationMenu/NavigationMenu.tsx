"use client";
import { useEffect, useRef, useState } from "react";

import { MenuStructure } from "@components/MainMenu/utils/menuStructure";
import { useHasMounted } from "@headless-commerce/hooks/useHasMounted";
import { EMenuLevel } from "@headless-commerce/types/NavigationMenu.types";
import { errorHandler } from "@headless-commerce/utils/errorHandler";

export function NavigationMenu({ structure }: { structure: MenuStructure }) {
  const screenSliderRef = useRef<HTMLSsScreenSliderElement>(null);
  // const mounted = useHasMounted();
  const [withElements, setWithElements] = useState(false);

  useEffect(() => {
    if (!withElements) {
      import("@suits/ss-design-system/dist/components/ss-screen-slider")
        .then(({ defineCustomElement }) => {
          defineCustomElement();
          setWithElements(true);
        })
        .catch(errorHandler);
    } else {
      if (screenSliderRef?.current) {
        screenSliderRef.current.slideList = [
          EMenuLevel.LEVEL1,
          EMenuLevel.LEVEL2,
          EMenuLevel.LEVEL3,
        ];

        screenSliderRef?.current?.slideTo(EMenuLevel.LEVEL1);
      }
    }

    // if (sideSliderRefference?.current) {
    //   sideSliderRefference.current.addEventListener("sideSlideClose", () => {
    //     setSelectedItem("none");
    //     setParentItem("none");
    //     setSearchActive(true);
    //     _setActiveMenuLevelHelper(EMenuLevel.LEVEL1);
    //   });
    // }
  }, [withElements]);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <ss-screen-slider
      ref={screenSliderRef}
      initial-slide={EMenuLevel.LEVEL1}
      slide-in-direction="left"
      transition-duration="0.3s"
      transition-timing-function="ease"
    >
      <div slot={EMenuLevel.LEVEL1}>
        <h1>Slide position 1</h1>
        <pre>{JSON.stringify(structure[EMenuLevel.LEVEL1], null, 2)}</pre>
      </div>
      <div slot={EMenuLevel.LEVEL2}>
        <h1>Slide position 2</h1>
        <pre>{JSON.stringify(structure[EMenuLevel.LEVEL2], null, 2)}</pre>
      </div>
      <div slot={EMenuLevel.LEVEL3}>
        <h1>Slide position 3</h1>
        <pre>{JSON.stringify(structure[EMenuLevel.LEVEL3], null, 2)}</pre>
      </div>
    </ss-screen-slider>
  );
}
