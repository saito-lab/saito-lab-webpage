import * as React from "react"
import * as styles from "./index.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const projects = data.allMicrocmsProjects.edges;
  
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1>Project</h1>
        <div className={styles.projectContainer}>
          {projects.map((project, i) => (
            <div className={styles.project} key={i}>
              <Link to={`/project/${project.node.id}/`}>
                <img src={project.node.images[0].url} className={styles.picture} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const query = graphql`
{
  allMicrocmsProjects(sort: [{ createdAt: DESC }]) {
    edges {
      node {
        id
        title
        description
        images {
          url
          width
          height
        }
      }
    }
  }
}
`

export default IndexPage

export const Head = () => <title>明星大学 建築学部 齊藤哲也 研究室</title>
