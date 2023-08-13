import React from "react";
import styles from "./EventStatistic.module.css";

interface EventStatisticProps {
  title: string;
  value: number;
}

export default function EventStatistic({ title, value }: EventStatisticProps) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.statTitle}>
        <h2 className={styles.profileMediumTitle}>{title}</h2>
      </div>
      <div className={styles.statNumber}>
        <h2 className={styles.profileMediumNumber}>{value}</h2>
      </div>
    </div>
  );
}
