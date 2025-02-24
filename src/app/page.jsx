"use client"

import { Projets } from "@/components/MyCarousel";
import { Profil } from "@/components/MyProfil";
import { Title } from "@/components/MyTitle";
import { ProjetsListe } from "@/components/MyProjects";
import { Contact } from "@/components/MyContact";
import { ContactConfirmed } from "@/components/MyContactConfirmed";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function page() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [activeSection, setActiveSection] = useState('profil');

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };

    return (
        <>

            <Title />
            <div className="grid sm:col-span-4 col-span-12 flex flex-col mt-8">
                <div className="place-items-center">

                    <div className="w-36 h-36 rounded-full  overflow-hidden">
                        <Image
                            src="/profile.jpg"  // Chemin vers l'image dans le dossier public
                            alt="Image de profil"
                            width={200}  // Largeur de l'image
                            height={200} // Hauteur de l'image
                            className="object-none w-full h-full"
                        />
                    </div>
                    <div className="flex flex-row mt-8">
                        {/* Boutons de navigation */}
                        <Button
                            variant="ghost"
                            className="hover:bg-buttonhover"
                            onClick={() => setActiveSection('profil')}>
                            Profil
                        </Button>
                        <Button
                            variant="ghost"
                            className="hover:bg-buttonhover"
                            onClick={() => setActiveSection('projets')}>
                            Projets
                        </Button>
                        <Button
                            variant="ghost"
                            className="hover:bg-buttonhover"
                            onClick={() => setActiveSection('contact')}>
                            Contact
                        </Button>
                    </div>
                </div>
            </div>

            <br />
            <div className="col-start-2 sm:col-start-2 sm:col-span-4 col-span-11">
                {/* Affichage des sections en fonction du bouton cliqué */}
                {activeSection === 'profil' && (
                    <div>
                        <Profil />
                    </div>
                )}
                {activeSection === 'projets' && (
                    <div>
                        <ProjetsListe />
                    </div>
                )}
                {activeSection === 'contact' && (
                    <div>
                        {!formSubmitted ? (
                            <Contact onFormSubmit={handleFormSubmit} />
                        ) : (
                            <ContactConfirmed />
                        )}
                    </div>
                )}
            </div>

            <div className="col-start-4 col-span-6 sm:col-start-7 sm:col-span-5">
                <Projets />
            </div>
        </>
    );
}
