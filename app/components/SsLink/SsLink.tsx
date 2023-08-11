import React, { useState } from "react";

import { Icon } from "@components/Icon/Icon";
import styles from "./Sslink.module.scss";

type SsLinkVariation = "light" | "dark";

interface SsLinkProps {
  className?: string;
  label?: string;
  icon?: string;
  iconPosition?: "start" | "end";
  count?: number;
  fullWidth?: boolean;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  colorPalette?: SsLinkVariation;
  onLinkClick?: () => void;
}

export function SsLink({
  className,
  label,
  icon,
  iconPosition = "end",
  count,
  fullWidth = false,
  href,
  target = "_self",
  colorPalette = "dark",
  onLinkClick,
  children,
}: SsLinkProps & { children?: React.ReactNode }) {
  const [role, setRole] = useState<"link" | "button">(href ? "link" : "button");

  const _onClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const linkElement = (
    <a
      className={styles.control}
      onClick={_onClick}
      href={href}
      target={target}
    >
      <span className={`${styles[colorPalette]}`}>
        {icon && iconPosition === "start" && (
          <span className={styles.icon}>
            <Icon icon={icon} />
          </span>
        )}
        {label}
        {icon && iconPosition === "end" && (
          <span className={styles.icon}>
            <Icon icon={icon} />
          </span>
        )}
      </span>
      {children || null}
    </a>
  );

  const buttonElement = (
    <button
      className={styles.control}
      automation-key-filter-id={label}
      onClick={_onClick}
    >
      <span className={`${styles[colorPalette]}`}>
        {icon && iconPosition === "start" && (
          <span className={styles.icon}>
            <Icon icon={icon} />
          </span>
        )}
        <span className={styles.label}>
          {label}
          {count !== undefined && !Number.isNaN(count) && (
            <span className={styles.count}>{count}</span>
          )}
        </span>
        {icon && iconPosition === "end" && (
          <span className={styles.icon}>
            <Icon icon={icon} />
          </span>
        )}
      </span>
      {children || null}
    </button>
  );

  return (
    <div
      className={`
        ${styles.host}
        ${fullWidth ? "full-width" : ""} 
        link-icon-${iconPosition}
        ${className ? className : ""}
      `}
      role={role}
    >
      {role === "link" && href && linkElement}
      {role === "button" && buttonElement}
    </div>
  );
}
