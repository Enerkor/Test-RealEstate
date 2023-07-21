import React from "react";

import "./Companies.css";
import Prologis from "../../../public/prologis.png";
import Tower from "../../../public/tower.png";
import Equinix from "../../../public/equinix.png";
import Realty from "../../../public/realty.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Prologis} alt="Prologis" />
        <img src={Tower} alt="Tower" />
        <img src={Equinix} alt="Equinix" />
        <img src={Realty} alt="Realty" />
      </div>
    </section>
  );
};

export default Companies;
