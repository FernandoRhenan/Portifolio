import styles from './Profile.module.css'
import Alert from '../../components/alert/Alert'
import { useState } from 'react'
import ProfileImg from '../../assets/profileIMG.jpg'
import Footer from '../../components/footer/Footer'

const Profile = () => {

  const [info, setInfo] = useState(false)
 const showDetails = () => {
  setInfo(Math.random())
 }


  return (
    <div className={styles.profile_container}>
      <img className={styles.picture} src={ProfileImg} alt='profile' ></img>
      <h1>Fernando Rhenan</h1>
      <h2>Web developer</h2>

      <p>Me chamo Fernando Rhenan Weber, tenho 19 anos e estudo desenvolvimento Web há pelo menos 1 ano.
        Entrei nessa área logo após a minha formação no ensino médio.
      </p>

      <p>Comecei a estudar através de cursos em plataformas digitais e pela internet de forma geral. Então peguei gosto por programação e decidi definitivamente que eu faria disso minha profissão.</p>

      <p>O foco dos meus estudos e trabalho estão na parte do <span className='info' onMouseOver={showDetails}>Front-end</span>
        , pois é minha paixão trabalhar com coisas visuais e que transmitem uma sensação de coerência e aconchego aos olhos das pessoas.
      </p>

      <p>
        Sempre gostei muito de fotografia, edição de fotos e música, então, foi por já ter uma boa afinidade com a arte, que juntei algumas habilidades com a vontade trabalhar com tecnologia e telas.
      </p>

  
      <h2>Qual o meu objetivo?</h2>

      <p>Meu principal objetivo é me aperfeiçoar como desenvolvedor front-end, aprender tudo o que é necessário para ter uma carreira de sucesso. Além disso, quero também aprender mais sobre back-end, gosto de entender como as coisas funcionam por trás dos "panos", e também acho importante ter a visão mais generalista sobre um sistema.</p>

      <p>Quero aprender inglês de forma fluente. Fiz 1 ano de curso e saí quando a pandemia teve o grande aumento de casos, então depois disso não fiz mais nenhum curso de línguas, por conta de uma nova rotina de trabalho e de estudos tive que priorizar outras coisas.</p>

      {info &&
        <Alert cancelInfo={info} type='Info' title='Front-end: ' content='Essa é uma das áreas do desenvolvimento web que trabalha com a parte visual de um site e proporciona uma boa experiencia para o consumidor final.' />
      }
      <Footer />
    </div>

  )
}

export default Profile