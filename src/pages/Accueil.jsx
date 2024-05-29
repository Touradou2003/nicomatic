import React from "react";
import Header from "../components/Header";
import HeroBienv from "../components/HeroBienv";
import LayoutHero from "../components/LayoutHero";
import Footer from "../components/Footer";
import Realisation from "../components/Realisation";
import Partenaires from "../components/Partenaires";
import Stat from "../components/Stat";
import ContactMe from "../components/ContactMe";
import Activite from "../components/Activite";

function Accueil() {
    const id1 = "Apropos";

    return (
        <div className=" overflow-hidden bg-fond ">
            <Header />
            <ContactMe/>
            <HeroBienv />
            <LayoutHero
                id={id1}
                title={"Il était une fois"}
                texte={` Lorem ipsum dolor sit amet consectetur. Cursus quis turpis
                eget dictum est. Phasellus consectetur suspendisse ac ut
                sed. Tempus non amet cras sed tempus luctus ut tempor. In
                tellus sit vel nunc amet. Tempus non amet cras sed tempus
                luctus ut tempor. In tellus sit vel nunc amet`}
                image={"/assets/1.png"}
                position={"first"}
            />
            <LayoutHero
                id={id1}
                title={"Ainsi"}
                texte={` Lorem ipsum dolor sit amet consectetur. Cursus quis turpis
                eget dictum est. Phasellus consectetur suspendisse ac ut
                sed. Tempus non amet cras sed tempus luctus ut tempor. In
                tellus sit vel nunc amet. Tempus non amet cras sed tempus
                luctus ut tempor. In tellus sit vel nunc amet`}
                image={"/assets/1.png"}
                position={"last"}
            />
            <Stat/>
            <Activite/>
            <Realisation/>
            <Partenaires/>
            <Footer/>
        </div>
    );
}

export default Accueil;
