import * as React from "react"
import * as styles from "./header.module.scss"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src="logo-large.jpg" className={styles.logo} />
                </Link>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/about/" className={styles.link} height={70} >about</Link>
            </div>
        </header>
    )
}

export default Header
