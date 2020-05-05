import React from "react";
import coronaImage from "../../images/page_banner.png";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
    </div>
  );
};

export default HomePage;
