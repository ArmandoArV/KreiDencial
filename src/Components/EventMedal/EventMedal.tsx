import React from "react";
import styles from "./EventMedal.module.css";

interface EventMedalProps {
  title: string;
  image: string;
  status?: boolean;
}

export default function EventMedal({ title, image, status }: EventMedalProps) {
  return status ? (
    <div className={styles.medalContainer}>
      <div className={styles.medalImgContainer}>
        <div className={styles.medalImage}>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className={styles.medalTitle}>
        <h1>{title}</h1>
      </div>
    </div>
  ) : null;
}
