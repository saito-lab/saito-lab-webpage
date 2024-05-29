import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import * as styles from "./404.module.scss"

const NotFoundPage = () => {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1>404 Not Found</h1>
      </div>
      <Footer />
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404 Not found</title>
