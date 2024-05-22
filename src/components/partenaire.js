import "../styles/partenaire.css"
import logos from "../assets/partenaires.png"



export default function Partenaire(){

    return (
        <>
        <section id="partenaire">
            <h1 class="titrepartenaire">Nos partenaires</h1>
            <p id="para">
                lorem Ipsum is simply dummy text of the printing and typesetting public domain. Lore m carefully designed for use in other languages and typesetting is not part of the public domain lorem Ipsum is simply dummy text of the printing and typesetting public domain.
            </p>
            <div class="logos">
            <img id="imgPartenaires" src={logos} alt="Partenaires" />
            </div>

        </section>
    
    </>

    )

    
}