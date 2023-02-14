import styles from './Contact.module.css'
import Footer from '../../components/footer/Footer'
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Contacts from '../../components/contacts/Contacts';

const Contact = () => {
  return (
    <div className={styles.contact_container}>

      <h1>Entre em contato</h1>

      <div className={styles.contact_box}>
        <h2>Aqui você poderá pegar alguma forma de contato, seja ela:</h2>

        <Contacts />

        <h2>Ou então clicando diretamente nos ícones!</h2>

        <span className={styles.icons_box}>
          <a rel='noreferrer noopener' href='https://wa.me/48984449444' target='_blank'><FaWhatsapp color='#21C600' /></a>
          <a rel='noreferrer noopener' href='https://www.linkedin.com/in/fernando-rhenan-weber-445ba4246/' target='_blank'><FaLinkedin color='#007DB7' /></a>
          <a rel='noreferrer noopener' href='https://github.com/FernandoRhenan' target='_blank'><FaGithub color='#00141E' /></a>
          <a rel='noreferrer noopener' href='https://www.instagram.com/fernandorhenan/' target='_blank'><FaInstagram color='#FF7919' /></a>
          <a rel='noreferrer noopener' href='https://mail.google.com/mail' target='_blank'><SiGmail color='#FF1E0A' /></a >
        </span >
      </div >


      <Footer />
    </div >

  )
}

export default Contact
