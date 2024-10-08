'use client'

import styles from './form.module.css';




const Form = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        return console.log(data)
        
        // try {
          
        //   const res = await createAccommodations(data);
          
        //   return router.push('/dashboard/accommodations');
    
        // } catch (err) {
    
        //   console.error(err);
    
        // }
    
    
    };



  return (
    <form className={styles.form} onSubmit={handleSubmit} id='form'>
        <div className={styles.top}>
            <div className={styles.formItem}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text" name='name' required placeholder='Nombre' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Apellido</label>
                <input className={styles.input} type="text" name='surname' required placeholder='Apellido' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>E-Mail</label>
                <input className={styles.input} type="email" name='email' required placeholder='tucorreo@email.com' />
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Telefono</label>
                <input className={styles.input} type="number" name='phone' required placeholder='Telefono'  />
            </div>
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>Mensaje</label>
            <textarea className={styles.textarea} type="text" name='message' required placeholder='Mensaje' />
        </div>
        <button className={styles.button} type='submit' form='form' >ENVIAR MENSAJE</button>
    </form>
  )
}

export default Form
