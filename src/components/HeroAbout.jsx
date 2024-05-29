import React from "react";
import { Link } from "react-router-dom";
function HeroAbout() {
    return (
        <section id="accueil">
            <div class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtwLq2T2Wk51eloh9nPQzhLXE6FYgSJoJqFeylD0JOA&s"
                    alt="equipe"
                    class="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div class="absolute inset-0 bg-bleu mix-blend-multiply"></div>

                <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
                    <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                        Qui sommes nous?
                    </h1>
                </div>
            </div>
            <div className=" px-4 py-5 rounded-lg shadow bg-fond -translate-y-12 w-96  mx-auto lg:w-3/5">
                <h1 className=" text-xl lg:text-2xl font-extrabold text-gris my-4">
                    Notre Histoire
                </h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur. Cursus quis turpis
                    eget dictum est. Phasellus consectetur suspendisse ac ut
                    sed. Tempus non amet cras sed tempus luctus ut tempor...
                </p>
                <div className=" mt-4 w-fit px-6 py-1 border-2 border-bleu rounded-full font-bold text-white bg-bleu shadow-lg">
                    <Link to="/">Voir plus</Link>
                </div>
            </div>
        </section>
    );
}

export default HeroAbout;
