import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarResponsive}>
        <div className={styles.navbarBrand}><Link to="item1" className={styles.navbarBrandLink}>Logo</Link></div>

        <div className={styles.navbarBurger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`${styles.navbarMenu} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="item1" className={styles.navbarItem} onClick={closeMenu}>
          Item 1
        </Link>

        <div
          className={`${styles.navbarItem} ${styles.hasSubmenu}`}
          onClick={toggleSubmenu}
        >
          <Link to="item2" className={styles.navbarLink}>
            Item 2<FaAngleDown />
          </Link>

          <div
            className={`${styles.submenu} ${isSubmenuOpen ? styles.open : ""}`}
          >
            <Link
              to="subitem1"
              className={styles.navbarSubItem}
              onClick={closeMenu}
            >
              Sub-item 1
            </Link>
            <Link
              to="subitem2"
              className={styles.navbarSubItem}
              onClick={closeMenu}
            >
              Sub-item 2
            </Link>
            <Link
              to="subitem3"
              className={styles.navbarSubItem}
              onClick={closeMenu}
            >
              Sub-item 3
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
