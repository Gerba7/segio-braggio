'use client'

import { useState } from 'react';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitSchema } from '@/app/lib/zod';
import { submitMessage } from '@/app/lib/actions';




const Form = () => {

    const [sent, setSent] = useState(false);

    const { register, handleSubmit, watch, formState: {errors, isSubmitting} } = useForm({ resolver: zodResolver(submitSchema) });

    const onSubmit = async (data) => {
        try {
            await submitMessage(data);
            return setSent(true);
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text"  {...register("name")} placeholder='Nombre' />
                <p className={styles.error}>{errors?.name?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Apellido</label>
                <input className={styles.input} type="text"  {...register("surname")} placeholder='Apellido' />
                <p className={styles.error}>{errors?.surname?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>E-Mail</label>
                <input className={styles.input} type="email" {...register("email")} placeholder='tucorreo@email.com' />
                <p className={styles.error}>{errors?.email?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Telefono</label>
                <input className={styles.input} type="number" {...register("phone")} placeholder='Telefono'  />
                <p className={styles.error}>{errors?.phone?.message}</p>
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>Mensaje</label>
            <textarea className={styles.textarea} type="text" {...register("message")} placeholder='Mensaje' />
            <p className={styles.error}>{errors?.message?.message}</p>
        </div>
        <input className={styles.input} type="text" {...register("course")} defaultValue={'In-Company'} style={{display: 'none'}} />
        {isSubmitting ?
            <button className={styles.disabled} disabled type='submit' form='form' >CARGANDO...</button>
            :
            (sent ? 
                <button className={`${styles.button} ${styles.success}`} disabled type='submit' form='form' >ENVIADO</button>
                :
                <button className={styles.button} type='submit' form='form' >INSCRIBIRME</button>
            )
        }
    </form>
  )
}

export default Form
