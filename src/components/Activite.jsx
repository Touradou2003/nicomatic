import React from "react";

function Activite() {
    return (
        <section
            id="Activite"
            className="py-16  px-4 lg:py-32 container mx-auto lg:px-24  relative"
        >
            <div className=" w-full mb-8 z-50">
                <h1 className="text-3xl text-center font-bold  font-inter">
                    NICOMATIC SENEGAL, C'est aussi
                </h1>
            </div>
            <div className=" grid grid-cols-3  grid-rows-2 gap-y-4">
                <div className=" w-48 h-42 lg:w-56 lg:h-52 bg-fond shadow-lg px-3 py-1 rounded cursor-pointer place-self-end translate-x-14 z-10">
                    <div className=" flex items-center space-x-2 ">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/target.svg"}
                            alt="icons consulting"
                            className="size-12 object-cover object-center"
                        />
                        <h1 className=" text-bleu font-semibold lg:text-xl">
                            Consulting
                        </h1>
                    </div>
                    <p className=" text-sm text-justify">
                        Lorem ipsum dolor sit amet consectetur. Cursus quis
                        turpis eget dictum est. Phasellus consectetur
                        suspendisse ac ut sed. Tempus non amet cras sed tempus
                        luctus ut tempor.
                    </p>
                </div>
                <div className=" col-start-2 row-span-2 px-2 flex items-center  justify-center relative">
                    <div className=" border-8 size-72 lg:size-96  rounded-full border-jaune absolute inset-50">

                    </div>
                    <div className=" max-sm:hidden  size-48 rounded-full bg-bleu text-white font-bold text-center lg:text-xl flex justify-center items-center">
                        <p>Pour une industrie vertueuse et performante</p>
                    </div>
                </div>
                <div className=" w-48 h-42 lg:w-56 lg:h-52 bg-fond shadow-lg px-3 py-1 rounded cursor-pointer -translate-x-14">
                    <div className=" flex items-center space-x-2">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/target.svg"}
                            alt="icons consulting"
                            className="size-12 object-cover object-center"
                        />
                        <h1 className=" text-bleu font-semibold lg:text-xl">
                            Consulting
                        </h1>
                    </div>
                    <p className=" text-sm text-justify">
                        Lorem ipsum dolor sit amet consectetur. Cursus quis
                        turpis eget dictum est. Phasellus consectetur
                        suspendisse ac ut sed. Tempus non amet cras sed tempus
                        luctus ut tempor.
                    </p>
                </div>
                <div className=" w-48 h-42 lg:w-56 lg:h-52 bg-fond shadow-lg px-3 py-1 rounded cursor-pointer place-self-end translate-x-14">
                    <div className=" flex items-center space-x-2">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/target.svg"}
                            alt="icons consulting"
                            className="size-12 object-cover object-center"
                        />
                        <h1 className=" text-bleu font-semibold lg:text-xl">
                            Consulting
                        </h1>
                    </div>
                    <p className=" text-sm text-justify">
                        Lorem ipsum dolor sit amet consectetur. Cursus quis
                        turpis eget dictum est. Phasellus consectetur
                        suspendisse ac ut sed. Tempus non amet cras sed tempus
                        luctus ut tempor.
                    </p>
                </div>
                <div className=" w-48 h-42 lg:w-56 lg:h-52 bg-fond shadow-lg px-3 py-1 rounded cursor-pointer -translate-x-14">
                    <div className=" flex items-center space-x-2">
                        <img
                            src={process.env.PUBLIC_URL + "/assets/target.svg"}
                            alt="icons consulting"
                            className="size-12 object-cover object-center"
                        />
                        <h1 className=" text-bleu font-semibold lg:text-xl">
                            Consulting
                        </h1>
                    </div>
                    <p className=" text-sm text-justify">
                        Lorem ipsum dolor sit amet consectetur. Cursus quis
                        turpis eget dictum est. Phasellus consectetur
                        suspendisse ac ut sed. Tempus non amet cras sed tempus
                        luctus ut tempor.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Activite;
