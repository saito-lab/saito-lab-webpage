import * as React from "react"
import * as styles from "./header.module.scss"
import { Link } from "gatsby"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src="/logo-large.jpg" className={styles.logo} />
                </Link>
            </div>
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <Link to="/" className={styles.link} height={70} >HOME</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/news/" className={styles.link} height={70} >NEWS</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/about/" className={styles.link} height={70} >ABOUT</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/project/" className={styles.link} height={70} >PROJECT</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
