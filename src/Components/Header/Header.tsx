"use client";
import React, { useState } from "react";
import {
  headerItems,
  headerLogginItems,
  headerAdminItems,
} from "../../Constants";
import styles from "./Header.module.css";
// Router from next
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  headerLogo: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

export default function Header({
  headerLogo,
  isAdmin,
  isLoggedIn,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine which header items to render based on the user's role
  const renderHeaderItems = () => {
    if (isAdmin) {
      return headerAdminItems;
    } else if (isLoggedIn) {
      return headerLogginItems;
    } else {
      return headerItems;
    }
  };

  // Handle logo click and navigate to the specified URL
  const handleLogoClick = () => {
    // usage of router to redirect to "/"
    navigate("/");
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo} onClick={handleLogoClick}>
        <img src={headerLogo} alt="logo" width={100} height={100} />
      </div>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <div
          className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}
        ></div>
        <div
          className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}
        ></div>
        <div
          className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}
        ></div>
      </div>
      <div className={`${styles.headerItems} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.MenuDesplegable}>
          <ul
            className={`${styles.headerItemsList} ${
              isMenuOpen ? styles.open : ""
            }`}
          >
            {renderHeaderItems().map((item) => (
              <li key={item.id}>
                <button onClick={() => navigate(item.link as string)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
