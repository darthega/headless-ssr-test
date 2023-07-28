import React from "react";
import styles from "./Icon.module.scss";

export function Icon({ icon }: { icon: string }) {
  return (
    <div
      className={`${styles.host} ${
        icon === "suitsupply_logo" ? styles.widthAuto : ""
      }`}
    >
      <i className="susu-icons">{icon}</i>
    </div>
  );
}
