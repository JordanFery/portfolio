import { Linkedin } from 'lucide-react';
import { Download } from 'lucide-react';
export function Profil() {


    return (

        <section className="pb-8">

            <div className="grid gap-4">


                <div className="col-span-5 sm:col-span-12 text-justify mt-8">
                    Développeur web issu de la formation développeur web - web mobile,
                    j'aime autant créer que répondre aux besoins des projets. Les projets
                    que je partage avec vous à travers ce portfolio sont autant des projets
                    de groupe que des projets créés seul. Ce portfolio fait partie de la seconde
                    catégorie. <br /> <br />
                    Passionné de jeux vidéo depuis mon plus jeune âge, j'ai su performer
                    lorsque l'envie et le temps me le permettaient, me faisant entrer dans le
                    top 1 % des meilleurs joueurs de World of Warcraft. J'aime aussi varier les
                    plaisirs avec Rocket League. Le point commun à ces deux jeux est que
                    l'investissement et la persévérance sont indispensables pour progresser.
                    Ces deux qualités me servent au quotidien dans mon métier de développeur web.
                    Je suis également motard depuis 12 ans et j'aime me balader autant
                    seul qu'en duo. <br /> <br />
                    J'aurai beaucoup à dire, mais de vive voix, ce sera mieux !
                </div>

                <div className="col-span-8">
                    Télécharger mon CV
                    <a href="/CV Développeur Full Stack.pdf"
                        download>
                        <Download className="inline ml-4" />
                    </a>
                </div>

                {/* mettre a jour l'url de linkedin pour faire attérir sur mon prodil */}
                <div className="col-span-8">
                    <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
                        <Linkedin color="grey" size={32} />
                    </a>
                </div>

            </div>
        </section>

    )


}