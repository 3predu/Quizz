import Botao from '../components/Botao'
import styles from '../styles/Creditos.module.css'

export default function Creditos(){
    return(
        <div className={styles.creditos}>
            <h3>
                Olá! Esse jogo foi criado em 2021,
                fruto do aprendizado que tive com o curso da Udemy,
                com o framework Next.js
            </h3>
            <h3>
                Foram utilizados, a biblioteca React e o framework Next.js,
                construi uma API e utilizei também: TypeScript, HTML e CSS
            </h3>
            <h3>Criadores: Pedro Lucca</h3>
            <Botao href="/menu" texto="Voltar" />
        </div>
    )
}