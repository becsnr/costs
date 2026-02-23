import styles from './Container.module.css'
import { Outlet } from 'react-router-dom'

function Container({ customClass }) {
    return (
        <div className={`${styles.container} ${customClass ? styles[customClass] : ""}`}>
            <Outlet />
        </div>
    )
}

export default Container