import styles from './Container.module.css'
import { Outlet } from 'react-router-dom'

function Container({ children, customClass }) {
    return (
        <div className={`${styles.container} ${customClass ? styles[customClass] : ""}`}>
            {children}
            <Outlet />
        </div>
    )
}

export default Container;