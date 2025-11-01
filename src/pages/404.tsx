import styles from "@/styles/404.module.scss"
import { error } from "console"
import { ReactElement } from "react"



const Custom404 = () => {

    const Error = [
        "404 | Page Not Found",
        "505 | Server Error"
    ]

    return (
        <div className={styles.error}>
            <h1>{Error ? Error[0] : Error[1]}</h1>
            <img src="/error.svg" alt="404" className={styles.error__image} />
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default Custom404