import styles from './About.module.css'
import Alert from '../../components/alert/Alert'
import { useState } from 'react'

const About = () => {

    const [info, setInfo] = useState(false)
    const showDetails = () => {
     setInfo(Math.random())
    }


    return (
        <div className={styles.about_container}>
            <h1>Sobre o portifólio</h1>
            <p>Criei esse portifólio com o objetivo de divulgar e apresentar meu trabalho, nele está aplicado o muitas coisas que aprendi durante o tempo que estudo desenvolvimento web e também o que eu ainda desejo aprender.</p>
            <p>Esse portifólio foi feito com muito amor. Dos arquivos principais até o plano de fundo foram feitos autenticamente por mim, usando minha capacidade criativa, imaginação e também a técnica.</p>

            <h2>Tecnologias usadas</h2>
            <h4>em termos mais técnicos</h4>

            <p>
                Para fazer o esse portifólio usei como base o React JS, que é uma biblioteca do JavaScript que utiliza de várias outras tecnologias para funcionar, como HTML, Node JS e o transpilador Babel, assim como várias outras dependências.
                Foi usado também o React Router Dom para fazer o roteamento das paginas, mantendo o fundamento de <span className='info' onMouseOver={showDetails}>SPA</span>, e o React Icons, usado para obter todos os ícones do site.
            </p>
            <p>
                O plano de fundo principal e o plano de fundo das cards, foram feitos no PhotoScape X, que é um editor de imagens que eu usava para editar algumas das minhas fotografias, então percebi que nele também seria possível criar fundos para os meus sites.
            </p>

            {info &&
                <Alert cancelInfo={info} type='Info' title='SPA: ' content='Do inglês, single page application, ou seja, aplicação de página unica, isso significa que SPAs são paginas que não apresentam o tradicional carregamento, quando clicamos em um link que redireciona para uma outra área do site, por exemplo.' />
            }

        </div>
    )
}

export default About