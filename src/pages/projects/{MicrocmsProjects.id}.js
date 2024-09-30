import React from "react"
import { graphql } from "gatsby"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Header from "../../components/header"
import Footer from "../../components/footer"
import * as styles from "./{MicrocmsProjects.id}.module.scss"

const MicrocmsProjectPage = ({ data }) => {
  const splideOption = {
    rewind: true,
    height: 600,
    width: '100%',
    gap: '1rem',
    autoplay: true,
    interval: 2000,
  }
  const project = data.microcmsProjects;
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Splide aria-label="Top images" options={splideOption}>
          {project.images.map((image, i) => (
            <SplideSlide key={i}>
              <img className={styles.image} src={image.url} alt={image.alt} />
            </SplideSlide>
          ))}
        </Splide>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.discription} dangerouslySetInnerHTML={{__html: project.description}}></div>
      </div>
      <Footer />
    </main>
  )
}

export const query = graphql`
  query ($id: String) {
    microcmsProjects(id: { eq: $id }) {
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
`

export default MicrocmsProjectPage

export const Head = () => <title>Project - 明星大学 建築学部 齊藤哲也 研究室</title>
