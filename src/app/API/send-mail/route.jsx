// import nodemailer from 'nodemailer';

// export async function POST(req) {
//     const { username, entreprise, message, email } = await req.json();

//     // Déterminer le service d'email à utiliser
//     let service;
//     if (email.endsWith('@gmail.com')) {
//         service = 'gmail';
//     } else if (email.endsWith('@yahoo.com')) {
//         service = 'yahoo'; // Yahoo nécessite une configuration spécifique
//     } else if (email.endsWith('@outlook.com') || email.endsWith('@hotmail.com') || email.endsWith('@hotmail.fr')) {
//         service = 'hotmail'; // Hotmail et Outlook
//     } else if (email.endsWith('@aol.com')) {
//         service = 'aol'; // AOL
//     } else if (email.endsWith('@nos-animaux.fr')) {
//         service = 'nos-animaux'; // ADMIN
//     } else if (email.endsWith('@icloud.com')) {
//         service = 'icloud'; // iCloud (peut nécessiter des configurations spécifiques)
//     } else if (email.endsWith('@zoho.com')) {
//         service = 'zoho'; // Zoho Mail
//     } else if (email.endsWith('@protonmail.com')) {
//         return new Response(JSON.stringify({ error: 'ProtonMail n\'est pas supporté pour l\'envoi d\'emails via SMTP' }), { status: 400 });
//     } else if (email.endsWith('@mail.com')) {
//         service = 'mail'; // Mail.com
//     } else {
//         return new Response(JSON.stringify({ error: 'Service email non supporté' }), { status: 400 });
//     }

//     const transporter = nodemailer.createTransport({
//         service: service,
//         auth: {
//             user: process.env.EMAIL_USER, // Votre adresse email
//             pass: process.env.EMAIL_PASS, // Votre mot de passe ou mot de passe d'application
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER, // L'adresse email utilisée pour l'envoi
//         replyTo: email, // L'adresse email saisie dans le formulaire
//         to: 'j.fery@hotmail.fr', // L'adresse où envoyer le message
//         subject: 'Nouveau message du formulaire de contact',
//         text: `Prénom: ${username}\nEntreprise: ${entreprise}\nMessage: ${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         return new Response(JSON.stringify({ message: 'Email envoyé' }), { status: 200 });
//     } catch (error) {
//         console.error('Erreur lors de l\'envoi de l\'email:', error.message);
//         return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }), { status: 500 });
//     }
// }


import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { username, entreprise, message, email } = await req.json();

        console.log("Données reçues : ", { username, entreprise, message, email });

        // Vérification de la validité de l'email
        if (!email || !email.includes('@')) {
            return new Response(JSON.stringify({ error: 'Email non valide.' }), { status: 400 });
        }

        // Déterminer le service d'email à utiliser
        let service;
        if (email.endsWith('@gmail.com')) {
            service = 'gmail';
        } else if (email.endsWith('@yahoo.com')) {
            service = 'yahoo'; // Yahoo nécessite une configuration spécifique
        } else if (email.endsWith('@outlook.com') || email.endsWith('@hotmail.com') || email.endsWith('@hotmail.fr')) {
            service = 'hotmail'; // Hotmail et Outlook
        } else if (email.endsWith('@aol.com')) {
            service = 'aol'; // AOL
        } else if (email.endsWith('@nos-animaux.fr')) {
            service = 'nos-animaux'; // ADMIN
        } else if (email.endsWith('@icloud.com')) {
            service = 'icloud'; // iCloud (peut nécessiter des configurations spécifiques)
        } else if (email.endsWith('@zoho.com')) {
            service = 'zoho'; // Zoho Mail
        } else if (email.endsWith('@protonmail.com')) {
            return new Response(JSON.stringify({ error: 'ProtonMail n\'est pas supporté pour l\'envoi d\'emails via SMTP' }), { status: 400 });
        } else if (email.endsWith('@mail.com')) {
            service = 'mail'; // Mail.com
        } else {
            return new Response(JSON.stringify({ error: 'Service email non supporté' }), { status: 400 });
        }

        console.log(`Service de mail utilisé : ${service}`);

        // Configuration du transporteur de Nodemailer
        const transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: process.env.EMAIL_USER, // Assure-toi que cette variable est bien définie
                pass: process.env.EMAIL_PASS, // Assure-toi que cette variable est bien définie
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // L'adresse email utilisée pour l'envoi
            replyTo: email, // L'adresse email saisie dans le formulaire
            to: 'j.fery@hotmail.fr', // L'adresse où envoyer le message
            subject: 'Nouveau message du formulaire de contact',
            text: `Prénom: ${username}\nEntreprise: ${entreprise}\nMessage: ${message}`,
        };

        // Tentative d'envoi de l'email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé avec succès : ', info.messageId);

        return new Response(JSON.stringify({ message: 'Email envoyé' }), { status: 200 });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email : ', error);
        return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email', details: error.message }), { status: 500 });
    }
}
