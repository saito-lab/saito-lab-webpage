import * as React from 'react'
import * as styles from './project.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const ProjectDetailPage = ({ data, pageContext }) => {
  const splideOption = {
    rewind: true,
    height: 600,
    width: '100%',
    gap: '1rem',
    autoplay: true,
    interval: 2000,
  }
  return (
    <>
      <Header />
        <div className={styles.container}>
          <Splide aria-label="Top images" options={splideOption}>
            {pageContext.images.map((image, i) => (
              <SplideSlide key={i}>
                <img src={image.src} alt={image.alt} />
              </SplideSlide>
            ))}
          </Splide>
          <h1 className={styles.title}>{pageContext.title}</h1>
          <div className={styles.discription}>{pageContext.discription}</div>
        </div>
      <Footer />
    </>
  )
}

export default ProjectDetailPage

export const Head = ({ data, pageContext }) => <title>{pageContext.title} - 明星大学 建築学部 齊藤哲也 研究室</title>
