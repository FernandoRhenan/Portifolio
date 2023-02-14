import styles from './Projects.module.css'
import Footer from '../../components/footer/Footer'
// import Warning from '../../components/warning/Warning'
import CardProject from '../../components/cardProject/CardProject'
import webdev from '../../assets/webdev.png'
import miniblog from '../../assets/miniblog.png'
import inove from '../../assets/inove.png'

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <h1>Projetos</h1>
      <h2>Veja aqui um pouco do meu trabalho.</h2>

      <div className={styles.projects_text}>
        {/* <h1>Titulo do projeto</h1> */}
        <p>Nesta página é onde você poderá ver um pouco mais dos meus projetos em detalhes. Por exemplo, qual foram as linguagens e bibliotecas utilizadas, qual o objetivo do projeto e além disso, também será a sua maior oportunidade de avaliar meu trabalho e potencial.</p>
        <p>Você poderá clicar no card do projeto e assim obter mais informações. Também poderá acessar o site de primeira mão e navegar por ele.</p>

      </div>

      <div className={styles.projects_box}>
        <div><CardProject src={miniblog} name='Mini Blog' link='miniblog' /></div>
        <div><CardProject src={inove} name='Inove' link='inove' /></div>
        <div><CardProject src={webdev} name='WebDev Films' link='webdev' /></div>
      </div>


      <Footer />
    </div>
  )
}

export default Projects