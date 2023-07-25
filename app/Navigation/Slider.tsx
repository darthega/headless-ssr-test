"use client";
import { useEffect, useRef } from "react";

const setElements = Promise.all([
  import("@suits/ss-design-system/dist/components/ss-button").then(
    ({ defineCustomElement }) => defineCustomElement()
  ),
  import("@suits/ss-design-system/dist/components/ss-side-slider").then(
    ({ defineCustomElement }) => defineCustomElement()
  ),
]);

export function Slider({ data }: any) {
  let mounted = useRef(false);
  const buttonRef = useRef<HTMLSsButtonElement>(null);
  const sliderRef = useRef<HTMLSsSideSliderElement>(null);

  useEffect(() => {
    if (!mounted.current) {
      setElements
        .then(() => {
          mounted.current = true;
        })
        .catch(console.error);
    }

    if (buttonRef.current && sliderRef.current) {
      buttonRef.current.addEventListener("click", () => {
        sliderRef.current?.toggle().catch(console.error);
      });
    }
  }, [buttonRef, sliderRef, mounted]);

  return (
    <div>
      <ss-button ref={buttonRef} label="123 test">
        123 test
      </ss-button>
      <ss-side-slider ref={sliderRef}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </ss-side-slider>
    </div>
  );
}
