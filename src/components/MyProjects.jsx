import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"
import { Laugh } from 'lucide-react';


export function ProjetsListe() {


    return (
        <div className="grid grid-cols-12 gap-4 pt-12">



            <div className="col-start-3 col-end-12">

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            <a className="hover:underline underline-offset-1" href="http://vitrine-4fmi.vercel.app" target="_blank">
                                Techrepair
                            </a>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Projet personnel qui à l'instar de "Azgarok", intègre un petit backend. Le but de ce projet était purement d'alimenter
                                mon portfolio. J'ai voulu par ce projet toucher aux outils principaux que je pourrais être ammené à utiliser pour la réalisation de sites vitrines.
                                <br />
                                Technos utilisées : Nextjs (Front-end et Back-end) <br />
                                Tailwindcss, Shadcn, Lucide-React <br />
                                Prisma, PostgreSQL <br />
                                Emailjs <br />
                                Git, Vercel, Supabase
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            <a className="hover:underline underline-offset-1" href="https://azgarok.vercel.app" target="_blank">
                                Azgarok
                            </a>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Projet exclusivement Frontend. Ce site a pour vocation de servire de plateforme centrale à un streamer Twitch.
                                En collaboration avec le streamer, nous avons défini le cadre du projet puis j'ai réalisé ce site. <br />
                                Projet suspendu temporairement.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            <a href="http://www.youtube.com">
                                Nos animaux
                            </a>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>

                                Mon projet de stage. Ce projet a été abandonné faute de financements.. Il aurait eu pour but de mettre en
                                relation des éleveurs de chiens et chats avec des futures propriétaires.
                                Le site aurait été orienté sur le côté éthique et respect du bien être des animaux.
                                Ma contribution pour ce site a été de créer la maquette mobile, desktop, le
                                Front-end et le Back-end d'un formulaire de contact utilisant Nodemailer ainsi
                                que la page de profil utilisateur avec la gestion du stockage des photos de
                                profile sur AWS S3, la création d'URL signée, de nanoid etc... afin d'assurer
                                la sécurité des données utilisateurs. <br />
                                Technos utilisées : Nextjs (Front-end et Back-end), Tailwindcss, Shadcn, Lucide-React Prisma, PostgreSQL
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <p className="text-start">
                                Homepage d'un site d'hébergement
                            </p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>

                                Créé en début de formation, ce site m'a permis de m'exercer sur HTML CSS et les flexbox
                                afin de prendre en main le positionnement des éléments sur une page.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>

    )



}