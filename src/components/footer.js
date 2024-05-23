import footer from "../assets/footer.png";
import '../styles/footer.css';

export default function Footer() {
    return (
        <>
            <section id="footer">
                <div class="imgFooter">
                    <div>
                        <img class="img" src={footer} alt="footer" />
                    </div>
                    <div class="formContainer">
                        <form>
                            <div class="bouge">
                            <h2>Contactez-nous</h2>
                            <label>
                                Nom:
                                <input type="text" name="name" />
                            </label>
                            <label>
                                Prénom:
                                <input type="text" name="firstname" />
                            </label>
                            <label>
                                Téléphone:
                                <input type="tel" name="phone" />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Message:
                                <textarea name="message"></textarea>
                            </label>
                            <input type="submit" value="Envoyer" />

                            </div>
                           
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
