import "../styles/bienvenue.css";

export default function HeroBienv() {
    return (
        <section
            id="accueil"
            className="py-24 lg:py-32 container mx-auto lg:px-24 flex flex-col lg:flex-row justify-between items-center"
        >
            <div className="relative lg:order-last z-0">
               
                <div className=" grid grid-cols-2 grid-rows-2 gap-4 mx-auto lg:mx-0 lg:gap-4 lg:order-last z-20">
                    <div className=" size-40 lg:size-56 rounded bg-jaune rounded-l-full"></div>
                    <div className=" size-40 lg:size-56 rounded bg-bleu"></div>
                    <div className=" size-40 lg:size-56 rounded bg-jaune"></div>
                    <div className=" size-40 lg:size-56 rounded bg-bleu rounded-r-full"></div>
                </div>
                <div className="absolute -bottom-20 -left-20 size-44 lg:size-56 bg-bleu rounded-full blur -z-10 animate-pulse" ></div>
                <div className="absolute -top-20 -right-20 size-44 lg:size-56 bg-jaune rounded-full blur -z-10 animate-pulse" ></div>
            </div>
            <div className="px-10 mt-8 z-0">
                <h1 className=" text-3xl lg:text-6xl font-extrabold text-gris my-4">
                    Bienvenue <br />
                    chez les{" "}
                    <span className=" text-bleu relative">
                        génies{" "}
                        <div className="absolute -top-1 right-0">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/circle.svg"
                                }
                                alt="circle"
                            />
                        </div>
                    </span>{" "}
                    <br />
                    de l'innovation!
                </h1>
                <p className=" max-w-xl">
                    Lorem ipsum dolor sit amet consectetur. Cursus quis turpis
                    eget dictum est. Phasellus consectetur suspendisse ac ut
                    sed. Tempus non amet cras sed tempus luctus ut tempor. In
                    tellus sit vel nunc amet. Tempus non amet cras sed tempus
                    luctus ut tempor. In tellus sit vel nunc amet
                </p>
            </div>
        </section>
    );
}
