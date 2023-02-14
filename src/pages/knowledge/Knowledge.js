import styles from './Knowledge.module.css'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import { FaSass, FaReact, FaHtml5, FaJsSquare, FaGitSquare,FaCss3Alt  } from "react-icons/fa";
import { SiTypescript  } from "react-icons/si";
import {TbApi} from "react-icons/tb"

const knowledge = () => {
  return (
    <div className={styles.knowledge_container}>

      <h1>Conhecimentos</h1>
      <h2>Aqui você poderá ver um pouco sobre as tecnologias que eu já utilizo.</h2>

      <div className={styles.appsGrid}>
        <Card color='#d13100' app='HTML' icon={<FaHtml5 />} />
        <Card color='#006f91' app='CSS' icon={<FaCss3Alt />} />
        <Card color='#ffc400' app='JavaScript' icon={<FaJsSquare />} />
        <Card color='#1EB7FF' app='React JS' icon={<FaReact />} />
        <Card color='#d13c01' app='Git' icon={<FaGitSquare />} />
        <Card color='#21A800' app='Fetch API' icon={<TbApi />} />
      </div>

      <h2>E também o que ainda quero aprender a utilizar.</h2>

      <div className={styles.appsGrid}>
        <Card color='#007DEA' app='TypeScript' icon={<SiTypescript />} />
        <Card color='#DB4CFF' app='SASS' icon={<FaSass />} />
        <Card color='#D1F0FF' app='React Native' icon={<FaReact />} />
      </div>

      
      <Footer />
    </div>
  )
}

export default knowledge