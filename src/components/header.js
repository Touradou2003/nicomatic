import logo from "../assets/logo.png"

export default function Header(){
    return (
        <>

            <header id="header">
                <img src={logo} alt="logo" id="logo"/>
                <nav>
                    <ul>
                        <li>
                            <a href="#accueil" id="accueil">Accueil</a>
                            <ul>
                                <li><a href="#à propos">A propos</a></li>
                                <li><a href="#Activités">Activités</a></li>
                                <li><a href="#Partenaires">Partenaires</a></li>
                                <li><a href="#Réalisations">Réalisations</a></li>
                                <li><a href="#Qui sommes-nous">Qui sommes-nous</a></li>
                            </ul>
                        </li>
                                <li>Factory</li>
                                <li>Studio</li>
                                <li>Consulting</li>
                                <li>Campus</li>

                    </ul>
                </nav>

                <button id="cta">Qui sommes-nous</button>

            </header>
        </>
    )

}

