import React from "react";
import Header from "../components/Header";
import HeroAbout from "../components/HeroAbout";
import LayoutHero from "../components/LayoutHero";
import MotCeo from "../components/MotCeo";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";

function About() {
    const id1 = "Apropos";
    return <div  className=" overflow-hidden bg-fond ">
        <Header/>
        <ContactMe/>
        <HeroAbout/>
        <LayoutHero
                id={id1}
                title={"G-NI'S, Le projet"}
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
                title={"L'ADN de G-NI'S"}
                texte={` Lorem ipsum dolor sit amet consectetur. Cursus quis turpis
                eget dictum est. Phasellus consectetur suspendisse ac ut
                sed. Tempus non amet cras sed tempus luctus ut tempor. In
                tellus sit vel nunc amet. Tempus non amet cras sed tempus
                luctus ut tempor. In tellus sit vel nunc amet`}
                image={"/assets/1.png"}
                position={"last"}
            />
            <MotCeo/>
            <Teams/>
            <Footer/>
    </div>;
}

export default About;
