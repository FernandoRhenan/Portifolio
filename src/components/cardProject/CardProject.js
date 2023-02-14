import { Link } from 'react-router-dom'
import styles from './CardProject.module.css'

const CardProject = ({src, name, link}) => {
    return(
        <div className={styles.cardProject}>
             <img alt='project_image' src={src}></img>
             <div>
                <span><Link to={`/projects/${link}`}>{name}</Link></span>
             </div>
        </div>
    )
}

export default CardProject