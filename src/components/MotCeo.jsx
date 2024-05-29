import React from "react";

function MotCeo() {
    return (
        <section
            id="accueil"
            className="py-24 lg:py-32 container mx-auto lg:px-24"
        >
            <h1 className="text-xl lg:text-2xl font-extrabold text-gris my-4 text-center">
                Le Mot du CEO
            </h1>
            <video
                controls
                className="px-2 lg:max-w-4xl rounded-xl mx-auto"
                alt="Video"
                poster={process.env.PUBLIC_URL + "/assets/madara.webp"}
            >
                <source src={process.env.PUBLIC_URL + "/assets/ceo.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default MotCeo;
