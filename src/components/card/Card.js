import styles from './Card.module.css'

const Card = ({icon ,app, color}) => {
    return (
      <div className={styles.card_container}>
       <div style={{color: color}} className={styles.icon}>{icon}</div>
       <div style={{color: color}} className={styles.app}>{app}</div>
        </div>
    )
  }
  
  export default Card