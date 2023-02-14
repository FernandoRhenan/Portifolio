import styles from './Inove.module.css'

const Inove = () => {
    return(
        <div className={styles.inove_container}>
            
            <h1>Inove</h1>
            <h2>Sobre o projeto</h2>
             
            <p>Inove é um projeto de uma página de login, de uma empresa fictícia chamada Inove.</p>

            <p>É um projeto com foco total em front-end, nele foram usadas as linguagens HTML, CSS e JavaScript. Contém verificações de formulário, típicos de front-end, como, verificar se todos os inputs estão preenchidos, se o input de email tem a mínima formatação necessária e se a senha possúi 6 ou mais caracteres.</p>

            <p>Para esse projeto utilizei o PhotoScape X para fazer o plano de fundo, a logo e o favicon do site.
            </p>

            <p>A ideia desse projeto é relacionado ao minimalismo mas com um design moderno, deixando uma tela visualmente limpa.</p>

            <h2>Acesso</h2>

            <p>Para acessar esse site, basta clicar no link disponível abaixo:</p>

            <span>
                <a target='_blank' rel='noreferrer noopener' href='https://paginadelogin-inove.netlify.app'>https://paginadelogin-inove.netlify.app</a>
            </span>

        </div>
    )
}

export default Inove