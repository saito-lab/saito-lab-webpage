import * as React from "react"
import * as styles from "./footer.module.scss"

const Footer = () => {
    const year = (new Date()).getFullYear()
    return (
        <footer className={styles.footer}>
            <span>&copy; {year} SAITO LABORATORY OF DESIGH AND ARCHITECTURE</span>
        </footer>
    )
}

export default Footer
