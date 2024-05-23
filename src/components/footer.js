import footer from "../assets/footer.png"
import '../styles/footer.css'
import Formulaire from "../components/formulaire"



export default function Footer()
{
    return(
        <>
            <section id="footer">
                <div class="imgFooter">
                    <img class="img" src={footer} alt="footer" />
                    <Formulaire />  
                </div>

            </section>
     
        
        </>
    )
}