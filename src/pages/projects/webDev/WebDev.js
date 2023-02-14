import styles from './WebDev.module.css'

const WebDev = () => {
    return (
        <div className={styles.webDev_container}>
            <h1>WebDev Films</h1>
            <h2>Sobre o projeto</h2>
            <p>Esse projeto foi feito com o objetivo de juntar dados dinâmicos, vindos de uma API, com a facilidade integrar com os componentes utilizando React JS.</p>
            <p>
                É um projeto simples, e de fato com esse objetivo, pois ele é um projeto de fins acadêmicos, sem intensão alguma de por no ar. Uma proposta simples de apenas pegar dados e distribuir-los.
            </p>
            <p>
                Para desenvolver-lo, utilizei React como biblioteca principal, react-icons, react-router-dom e a forma padrão do JavaScript para fazer requisições, o método fetch().
            </p>

            <h2>Acesso</h2>

            <p>Para acessar esse site, basta clicar no link disponível abaixo:</p>

            <span>
                <a target='_blank' rel='noreferrer noopener' href='https://webdevfilms.netlify.app'>https://webdevfilms.netlify.app</a>
            </span>

        </div>
    )
}


export default WebDev