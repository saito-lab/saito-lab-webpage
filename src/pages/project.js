import * as React from "react"
import * as styles from "./project.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

const AboutPage = () => {
  const projects = [
    {
      id: 1,
      image: '/sample1.jpg',
    },
    {
      id: 2,
      image: '/sample2.jpg',
    },
    {
      id: 3,
      image: '/sample3.jpg',
    },
    {
      id: 1,
      image: '/sample1.jpg',
    },
    {
      id: 2,
      image: '/sample2.jpg',
    },
    {
      id: 3,
      image: '/sample3.jpg',
    },
    {
      id: 1,
      image: '/sample1.jpg',
    },
    {
      id: 2,
      image: '/sample2.jpg',
    },
    {
      id: 3,
      image: '/sample3.jpg',
    },
    {
      id: 1,
      image: '/sample1.jpg',
    },
    {
      id: 2,
      image: '/sample2.jpg',
    },
    {
      id: 3,
      image: '/sample3.jpg',
    },
  ]
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1>Project</h1>
        <div className={styles.projectContainer}>
          {projects.map((project, i) => (
            <div className={styles.project} key={i}>
              <Link to={`/project/${project.id}/`}>
                <img src={project.image} className={styles.picture} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Project - 明星大学 建築学部 齊藤哲也 研究室</title>
