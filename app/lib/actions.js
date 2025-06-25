'use server'

import { revalidatePath } from "next/cache";
import { clientSchema, submitSchema } from "./zod";




export const submitForm = async (formData) => {
    
    const clientData = clientSchema.safeParse(formData);

    if(!clientData.success) {
        return { errors: clientData.error.issues }
    } 

    const response = await fetch(process.env.URL + '/api/contact', {
        method: 'POST',
        body: JSON.stringify(clientData.data),
    });

    if (response.ok) {
        
        console.log('OK')
        // revalidatePath('/open-training/to-be')

    } else {
    
        console.error('Error submitting form');

    }
    
    

}



export const submitMessage = async (formData) => {
    
    const clientMessage = submitSchema.safeParse(formData);

    if(!clientMessage.success) {
        return { errors: clientMessage.error.issues }
    } 

    const response = await fetch(process.env.URL + '/api/submit', {
        method: 'POST',
        body: JSON.stringify(clientMessage.data),
    });

    if (response.ok) {
        
        console.log('OK')
        // revalidatePath('/open-training/to-be')

    } else {
    
        console.error('Error submitting form');

    }
    
    

}