import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    const [activeLink, setActiveLink] = useState("accueil");
    const [navbar, setNavbar] = useState(false);
    const [subMenu, setSubMenu] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (window.scrollY >= top && window.scrollY < top + height) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setActiveLink]);

    const showNav = () => {
        setNavbar((prev) => !prev);
    };

    const showSubMenu = () => {
        setSubMenu((prev) => !prev);
    };

    const active =
        "p-2 text-bleu font-extrabold font-inter hover:text-bleu whitespace-nowrap";
    const inactive =
        "p-2 text-gris font-extrabold font-inter hover:text-bleu whitespace-nowrap";

    return (
        <header className="flex w-full justify-between lg:justify-around items-center fixed bg-fond py-2 shadow z-50 lg:py-4 px-4">
            <img
                src={process.env.PUBLIC_URL + "/assets/3.png"}
                alt="logo"
                id="logo"
                className="w-48"
            />
            <GiHamburgerMenu
                className="text-bleu text-2xl lg:hidden cursor-pointer"
                onClick={showNav}
            />
            <nav
                role="navigation"
                className={`${navbar ? "block" : "hidden"} lg:block`}
            >
                <ul className="absolute inset-0 h-screen bg-fond items-center justify-center lg:h-fit lg:relative flex-col lg:flex-row flex lg:justify-around w-full space-x-8 font-extrabold text-gris">
                    <FaXmark
                        onClick={showNav}
                        className="text-bleu text-2xl lg:hidden cursor-pointer absolute right-2 top-2"
                    />
                    <li className=" relative">
                        <span
                            id="Accueil"
                            className={
                                activeLink === "accueil" ? active : inactive
                            }
                            onClick={showSubMenu}
                        >
                            Accueil
                        </span>
                        <ul
                            className={
                                subMenu
                                    ? "hidden"
                                    : "flex flex-col space-y-2 absolute bg-fond px-4 py-1 -left-2 lg:shadow lg:rounded-lg lg:px-5 lg:py-2 lg:mt-2"
                            }
                        >
                            <li>
                                <a href="#Apropos">A propos</a>
                            </li>
                            <li>
                                <a href="#Activites">Activités</a>
                            </li>
                            <li>
                                <a href="#Partenaires">Partenaires</a>
                            </li>
                            <li>
                                <a href="#Realisations">Réalisations</a>
                            </li>
                            <li className=" lg:hidden">
                                <Link to="/about">Qui sommes-nous</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="#factory"
                            className={
                                activeLink === "factory" ? active : inactive
                            }
                        >
                            Factory
                        </a>
                    </li>
                    <li>
                        <a
                            href="#studio"
                            className={
                                activeLink === "studio" ? active : inactive
                            }
                        >
                            Studio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#consulting"
                            className={
                                activeLink === "consulting" ? active : inactive
                            }
                        >
                            Consulting
                        </a>
                    </li>
                    <li>
                        <a
                            href="#campus"
                            className={
                                activeLink === "campus" ? active : inactive
                            }
                        >
                            Campus
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="hidden lg:block px-4 py-2 border-2 border-bleu rounded-full font-bold text-bleu shadow-lg">
                <Link to="/about">Qui sommes-nous</Link>
            </div>
        </header>
    );
}
