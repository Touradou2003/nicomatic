import React from "react";

function LayoutHero({ id, title, texte, image, position }) {
    return (
        <section
            id={id}
            className="py-16  lg:py-32 container mx-auto lg:px-24 flex flex-col lg:flex-row justify-between "
        >
            <div className={`relative lg:order-${position} z-0`}>
                <div className=" size-80 lg:size-full mx-auto lg:mx-0 lg:gap-4 lg:order-last z-20 bg-white rounded-xl overflow-hidden">
                    <img
                        src={process.env.PUBLIC_URL + image}
                        alt={title}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                {
                    position === 'first' ? (
                        <div className="absolute -bottom-20 -right-20 size-44 lg:size-56 bg-jaune rounded-full blur -z-10 animate-pulse"></div>
                    ) : (
                        <div className="absolute -bottom-20 -right-20 size-44 lg:size-56 bg-bleu rounded-full blur -z-10 animate-pulse"></div>
                    )
                }
            </div>
            <div className="px-10 mt-8 z-0">
                <h1 className=" text-3xl lg:text-6xl font-extrabold text-gris my-4">
                    {title}
                </h1>
                <p className=" max-w-xl">
                   {texte}
                </p>
            </div>
        </section>
    );
}

export default LayoutHero;
