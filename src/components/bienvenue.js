import welcome from "../assets/welcome.png"
import "../styles/bienvenue.css"

export default function Bienvenue(){
    return (
        <>
             <section id="bienvenue">
                <div class="left">
                    <h1>Bienvenue chez les génies de l'innovation!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Cursus quis turpis eget dictum est. Phasellus consectetur suspendisse ac ut sed. Tempus non amet cras sed tempus luctus ut tempor. In tellus sit vel nunc amet.
    Tempus non amet cras sed tempus luctus ut tempor. In tellus sit vel nunc amet</p>
                    <button id="contactus">Contactez-nous</button>
                </div>
                <div class="right">
                    <img src={welcome} alt="banner" id="banner" />
                </div>
            </section>
        </>
    )
}
