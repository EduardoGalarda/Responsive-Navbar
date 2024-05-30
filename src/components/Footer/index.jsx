import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className={styles.footer}>
      <FaRegCopyright />
      {`${year} Developed by Galarda.`}
    </footer>
  );
};

export default Footer;
