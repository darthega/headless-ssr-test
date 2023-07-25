import { JSX as LocalJSX } from "@suits/ss-design-system/loader";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type StencilProps<T> = { [P in keyof T]: Omit<T[P], "ref"> };

type ReactProps<T> = {
  [P in keyof T]: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<
  T = LocalJSX.IntrinsicElements,
  U = HTMLElementTagNameMap
> = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements extends StencilToReact {}
  }
}
