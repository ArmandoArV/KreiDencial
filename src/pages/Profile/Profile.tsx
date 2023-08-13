import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import EventStatistic from "../../Components/EventStatistic/EventStatistic";
import EventMedal from "../../Components/EventMedal/EventMedal";
import { medals } from "../../Constants";
import Header from "../../Components/Header/Header";
import kreiBlanco from "../../images/kreiBlanco.png";
import { apiURL } from "../../Constants";

export default function Profile() {
  const [getProfileName, setProfileName] = useState("Michelle Jahén");
  const [getEventAssist, setEventAssist] = useState(0);
  const [getRemainingEvents, setRemainingEvents] = useState(0);

  return (
    <>
      <Header headerLogo={kreiBlanco} isAdmin={false} isLoggedIn={true} />
      <div className={styles.profileContainer}>
        <div className={styles.ProfileOutContainer}>
          <div className={styles.profileTop}>
            <div className={styles.profileTopLeft}>
              <h1 className={styles.profileTitle}>Hola, {getProfileName}</h1>
            </div>
            <div className={styles.profileTopRight}>
              <button className={styles.addCode}>+ Agregar código</button>
            </div>
          </div>
          <div className={styles.profileMedium}>
            <div className={styles.profileMediumLeft}>
              <EventStatistic
                title="Eventos Asistidos"
                value={getEventAssist}
              />
            </div>
            <div className={styles.profileMediumRight}>
              <EventStatistic
                title="Eventos Restantes"
                value={getRemainingEvents}
              />
            </div>
          </div>
          <div className={styles.profileBottom}>
            <div className={styles.topTitle}>
              <h2> Medallas de Eventos </h2>
            </div>
            <div className={styles.profileBottomMedals}>
              {medals.map((medal) => (
                <EventMedal
                  key={medal.id}
                  title={medal.title}
                  image={medal.image}
                  status={medal.isActive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
