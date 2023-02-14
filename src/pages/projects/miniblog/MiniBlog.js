import styles from './MiniBlog.module.css'
import { useState } from 'react'
import Alert from '../../../components/alert/Alert'

const MiniBlog = () => {

    const [info, setInfo] = useState(false)
    const showDetails = () => {
        setInfo(Math.random())
    }

    return (
        <div className={styles.miniblog_container}>
            <h1>Mini Blog</h1>
            <h2>Sobre o projeto</h2>
            <p>Esse projeto é originado do curso de React JS do professor e desenvolvedor <a href='https://www.linkedin.com/in/matheusbattisti/'>Matheus Battisti</a>. Tem como foco React JS, abordando hooks, custom hooks, páginas componentizadas, CSS componentizado e mais...</p>

            <p>Se trata de um projeto baseado em CRUD, acrônimo de Create, Read, Update, Delete. Foi feito com JavaScript como base e React como biblioteca, também foi usado firebase como serviço de <span className='info' onMouseOver={showDetails}>Back-end</span>.</p>

            <p>Contruído por parte, através do acompanhamento das aulas do curso, porém com a responsividade desenvolvida completamente por mim. </p>

            <h2>Acesso</h2>

            <p>Para acessar esse site, basta clicar no link disponível abaixo:</p>

            <span>
                <a target='_blank' rel='noreferrer noopener' href='https://miniblog-crud.netlify.app'>https://miniblog-crud.netlify.app</a>
            </span>

            {info &&
                <Alert cancelInfo={info} type='Info' title='Back-end: ' content=' É a áreas do desenvolvimento web que trabalha com a parte não visual de um site, como configurações de segurança, gerenciamento do banco de dados e usuários, e toda a lógica por trás de um site.' />
            }
        </div>
    )
}

export default MiniBlog