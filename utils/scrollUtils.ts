const _records: Map<string, any> = new Map();

const debounce = (key: string, cb: Function) => {
  if (!_records.has(key)) {
    _records.set(
      key,
      setTimeout(() => {
        cb();
        _records.delete(key);
      }),
    );
  }
};

export const scrollDebounce = (key: string, cb: Function) => {
  document.addEventListener('scroll', () => {
    debounce(key, cb);
  });
};

export const disableScroll = () => {
  document.querySelector('body')?.style.setProperty('--scroll-y', `${window.scrollY * -1}px`);
  document.querySelector('body')?.style.setProperty('--scroll-x', `${window.scrollX}px`);

  requestAnimationFrame(() => {
    document.querySelector('body')?.classList.add('scroll-disabled');
  });
};

export const enableScroll = () => {
  const scrollX = Math.abs(parseInt(document.querySelector('body')?.style.getPropertyValue('--scroll-x') || '0'));
  const scrollY = Math.abs(parseInt(document.querySelector('body')?.style.getPropertyValue('--scroll-y') || '0'));

  document.querySelector('body')?.classList.remove('scroll-disabled');

  requestAnimationFrame(() => {
    window.scrollTo({ left: scrollX, top: scrollY });
  });
};
