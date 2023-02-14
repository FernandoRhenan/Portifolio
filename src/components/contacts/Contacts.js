import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <>
            <ul className={styles.contacts}>
                <li>WhatsApp: <span>(48) 98444-9444</span></li>
                <li>LinkedIn: <span>Fernando Rhenan Weber</span></li>
                <li>GitHub: <span>FernandoRhenan</span></li>
                <li>Instagram: <span>fernandorhenan</span></li>
                <li>Gmail: <span>fernandorhenan9@gmail.com</span></li>
            </ul>
        </>
    )
}

export default Contacts