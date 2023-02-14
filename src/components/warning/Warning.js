import { AiFillWarning } from 'react-icons/ai'
import styles from './Warning.module.css'

const Warning = () => {
    return (
        <div className={styles.warning}>
                <AiFillWarning />
                <p>Em breve...</p>
        </div>
    )
}

export default Warning