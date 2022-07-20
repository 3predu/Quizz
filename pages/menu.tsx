import Botao2 from '../components/Botao2'
import Botao3 from '../components/Botao3'
import Botao4 from '../components/Botao4'
import styles from '../styles/Menu.module.css'

export default function Menu(){
    return(
        <div className={styles.menu}>
            <h1 className={styles.titulo_menu}>QUIZZ DO MIÃO</h1>
                <Botao2 href="/" texto="INICIAR" />
                <Botao4 href="/creditos" texto="CREDITOS + INFO" />
                <Botao3 href="/Saiu" texto="SAIR" />
        </div>
    )
}