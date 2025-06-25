'use client'

import { submitForm } from '@/app/lib/actions';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientSchema } from '@/app/lib/zod';
import { countries } from '@/app/lib/countries';
import { useState } from 'react';




const Form = () => {

    const [sent, setSent] = useState(false);
    
    const { register, handleSubmit, watch, formState: {errors, isSubmitting, isSubmitted} } = useForm({ resolver: zodResolver(clientSchema) });

    const onSubmit = async (data) => {
        try {
            const response = await submitForm(data);
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
                <input className={styles.input} type="text" {...register("name")} placeholder='Nombre' />
                <p className={styles.error}>{errors?.name?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Apellido</label>
                <input className={styles.input} type="text" {...register("surname")} placeholder='Apellido' />
                <p className={styles.error}>{errors?.surname?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>E-Mail</label>
                <input className={styles.input} type="email" {...register("email")} placeholder='tucorreo@email.com'  style={{textTransform: 'none'}} />
                <p className={styles.error}>{errors?.email?.message}</p>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Teléfono</label>
                <input className={styles.input} type="number" {...register("phone")} placeholder='(Cod. País) (Cod. Área) Teléfono'  />
                <p className={styles.error}>{errors?.phone?.message}</p>
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>País</label>
            {/* <input className={styles.input} type="text" {...register("country")} placeholder='Pais' /> */}
            <select className={styles.select} {...register("country")} defaultValue={''}>
                <option value="" disabled style={{color: 'lightgray'}}>Elige un país...</option>
                {countries.map(country => (
                    <option key={country} value={country}>
                    {country}
                    </option>
                ))}
            </select>
            <p className={styles.error}>{errors?.country?.message}</p>
        </div>
        <input className={styles.input} type="text" {...register("course")} defaultValue={'To Be'} style={{display: 'none'}} />
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
