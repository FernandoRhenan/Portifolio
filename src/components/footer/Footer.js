import Contacts from '../contacts/Contacts'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {


    return (
        <footer className={styles.footer_container}>

            <Link to='/about'>
                <span className={styles.saibaMaisBTN}>
                    <p>Mais sobre esse portifólio</p>
                </span>
            </Link>

            <Contacts />
        </footer>
    )
}

export default Footer