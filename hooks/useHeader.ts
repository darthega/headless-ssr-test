import { RefObject, useEffect } from "react";

import { scrollDebounce } from "@utils/scrollUtils";

const _distance = 60;
let _lastPosition = 0;
let _headerHeight: number;

const positionHeader = (ref: HTMLElement) => {
  const topScroll = window.scrollY;

  if (Math.abs(_lastPosition - topScroll) <= _distance) {
    return;
  }

  const hiddenClass = "is-header-hidden";
  const scrollDown = topScroll > _lastPosition && topScroll > _headerHeight;

  ref.classList.toggle(hiddenClass, scrollDown);

  _lastPosition = topScroll;
};

export const useHeader = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    _headerHeight = ref.current.getBoundingClientRect().height;

    scrollDebounce("header-animation", () =>
      positionHeader(ref.current as HTMLElement)
    );
  }, [ref]);
};
