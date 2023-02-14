import { useEffect, useState } from 'react'
import styles from './Alert.module.css'

const Alert = ({ type, title, content, cancelInfo }) => {

    const [closeInfo, setCloseInfo] = useState(false)

    useEffect(()=>{
        setCloseInfo(false)
    }, [cancelInfo])

    return (
        <div style={closeInfo ? { display: 'none' } : { undefined }} className={styles.alert}>
            <h3>{type}</h3>
            <p><span>{title}</span>
                {content}
            </p>
            <button onClick={() => {
                setCloseInfo(true)
            }}>Fechar</button>
        </div>
    )

}

export default Alert