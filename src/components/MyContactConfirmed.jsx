"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// Schéma de validation avec Zod
const formSchema = z.object({
    username: z.string().min(2, "Le nom d'utilisateur doit avoir au moins 2 caractères").max(50, "Le nom d'utilisateur est trop long"),
})

export function ContactConfirmed() {

    // 1. Initialisation du formulaire avec react-hook-form et Zod
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })


    return (

        <div className="grid grid-cols-12 gap-4">


            <div className="text-center col-span-12 my-24 text-3xl">
                Votre message a bien été envoyé !
            </div>



        </div>
    )
}
