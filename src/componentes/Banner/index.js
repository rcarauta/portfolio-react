import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas Vindas ao meu portfólio
                </p>

            </div>
            <div className={styles.imagens}>
                <img
                className={styles.circuloColorido} 
                src={circuloColorido}
                aria-hidden={true}
                alt='circulo colorido' />
                <img className={styles.minhaFoto}
                src={minhaFoto}
                alt='foto principal'/>
            </div>
        </div>
    )
}

export default Banner 