import "../styles/cartes.css";
import studio from "../assets/studio.png";
import consulting from "../assets/consulting.png";
import factory from "../assets/factory.png";
import campus from "../assets/campus.png";



export default function Cartes(){
    return(
        <>
        <section id="cartes">

        <h1 class="aussi">
                G-NI'S c'est aussi,
        </h1>

            <div class="site12">
                <div id="site1">
                    <img id="consulting" src={consulting} alt="consulting" />
                    <h1 class="titreConsulting">Consulting</h1>
                </div>
                <div id="site2">
                <img id="factory" src={factory} alt="factory" />
                <h1 class="titreFactory">Factory</h1>

                </div>
            </div>

            <div class="site34">
                <div id="site3">
                <img id="studio" src={studio} alt="studio" />
                <h1 class="titreStudio">Studio</h1>

                </div>
                <div id="site4">
                <img id="campus" src={campus} alt="campus" />
                <h1 class="titreCampus">Campus</h1>

                </div>
            </div>


        </section>
           

    
    
    
    
    
    </>
    )
}