import * as React from "react"
import * as styles from "./header.module.scss"
import { Link } from "gatsby"
// import { GatsbyImage} from "gatsby-plugin-image"
import { StaticImage} from "gatsby-plugin-image"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <StaticImage src="../images/logo-large.jpg" alt="logo" className={styles.logo} height={70}/>
                </Link>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/about/" className={styles.link} height={70} >about</Link>
            </div>
        </header>
    )
}

export default Header
