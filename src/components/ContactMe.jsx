import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

function ContactMe() {
    const [showForm, setShowForm] = useState(false);
    const handleShowForm = () => {
        setShowForm((prevShowform) => !prevShowform);
    };
    return (
        <div className="fixed bottom-0 right-0 z-50 cursor-pointer">
            <img
                src={process.env.PUBLIC_URL + "/assets/contact.svg"}
                alt="contact"
                onClick={handleShowForm}
                className={
                    showForm
                        ? "hidden"
                        : " size-28 p-4 lg:h-full lg:w-full object-cover object-center lg:p-8 "
                }
            />
            <div
                className={
                    showForm
                        ? "max-w-96 px-4 py-16 rounded-md  bg-fond shadow-lg relative"
                        : "hidden"
                }
            >
                <FaXmark
                    onClick={handleShowForm}
                    className=" absolute top-4 right-4 text-bleu text-xl cursor-pointer"
                />
                <h1 className="text-xl font-bold mb-6 ">Contactez-nous</h1>

                <form
                    noValidate=""
                    action=""
                    className="self-stretch space-y-3"
                >
                    <div>
                        <label htmlFor="name" className="text-sm ">
                            Prénom et Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Prénom"
                            className="w-full rounded-md focus:ring focus:dark:ring-jaune border-bleu outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm ">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md focus:ring focus:dark:ring-jaune border-bleu outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="tel" className="text-sm ">
                            Téléphone
                        </label>
                        <input
                            id="tel"
                            type="tel"
                            placeholder="Tel"
                            className="w-full rounded-md focus:ring focus:dark:ring-jaune border-bleu outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Votre message"
                            className="w-full rounded-md focus:ring focus:dark:ring-jaune border-bleu outline-none"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full py-2 font-semibold rounded dark:bg-jaune dark:text-gray-50"
                    >
                       Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
