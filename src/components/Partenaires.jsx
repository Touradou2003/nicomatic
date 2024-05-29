import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partenaires = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="Partenaires" className="h-full w-full py-24">
            <div className="flex flex-col items-start p-5 mb-8 ">
                <h1 className="text-3xl text-center font-bold  font-inter">
                    Nos Partenaires
                </h1>
                <p className="mt-4 text-xl text-left">Lorem ipsum dolor sit amet consectetur. Cursus quis turpis
                eget dictum est. Phasellus consectetur suspendisse ac ut
                sed. Tempus non amet cras sed tempus luctus ut tempor. In
                tellus sit vel nunc amet. Tempus non amet cras sed tempus
                luctus ut tempor. In tellus sit vel nunc amet</p>
            </div>

            <div className="slider-container px-8">
                <Slider {...settings} className="">
                    <div className="w-96 h-full flex items-center justify-center">
                        <a
                            href="https://www.nicomatic.com/fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/nicomatic.png"
                                alt="Nicomatic Logo"
                                className="mx-auto"
                            />
                        </a>
                    </div>
                    <div className="w-96 h-full flex items-center justify-center">
                        <a
                            href="https://www.az-injection.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/azinjection.jpg"
                                alt="azinjection Logo"
                                className="mx-auto"
                            />
                        </a>
                    </div>
                    <div className="size-40 flex items-center justify-center">
                        <a
                            href="https://conicio.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/conicio.png"
                                alt="conicio Logo"
                                className="mx-auto h-40"
                            />
                        </a>
                    </div>
                    <div className="w-96 h-full flex items-center justify-center">
                        <a
                            href="https://www.mdg-sarl.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/mdg.png"
                                alt="mdg Logo"
                                className="mx-auto"
                            />
                        </a>
                    </div>
                    <div className="w-96 h-full flex items-center justify-center">
                        <a
                            href="https://www.pem.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/pem.png"
                                alt="pem Logo"
                                className="mx-auto"
                            />
                        </a>
                    </div>
                    <div className="w-96 h-full flex items-center justify-center">
                        <a
                            href="https://www.mgb.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/puget.jpg"
                                alt="puget Logo"
                                className="mx-auto"
                            />
                        </a>
                    </div>
                    <div className="w-96 h-full flex items-center justify-center">
                        <a
                            href="https://thermocompact.com/fr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./images/thermo.png"
                                alt="thermo Logo"
                                className="mx-auto w-64 mt-12"
                            />
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Partenaires;
