import { z } from "zod";


export const clientSchema = z.object({
    name: z.string().min(1, 'El nombre es un campo requerido'),
    surname: z.string().min(1, 'El apellido es un campo requerido'),
    email: z.string().min(1, 'El email es un campo requerido').email('Dirección de email inválida'),
    phone: z.coerce.number().min(1, 'El teléfono es un campo requerido'),
    country: z.string().min(1, 'El pais es un campo requerido'),
    course: z.string(),
});


export const submitSchema = z.object({
    name: z.string().min(1, 'El nombre es un campo requerido'),
    surname: z.string().min(1, 'El apellido es un campo requerido'),
    email: z.string().min(1, 'El email es un campo requerido').email('Dirección de email inválida'),
    phone: z.coerce.number().min(1, 'El teléfono es un campo requerido'),
    message: z.string().min(1, 'Por favor, indique su consulta'),
    course: z.string(),
});