import * as React from "react"
import * as styles from "./index.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const IndexPage = () => {
  const images = [
    {
      alt: 'sampel 1',
      src: '/sample1.jpg',
    },
    {
      alt: 'sampel 2',
      src: '/sample2.jpg',
    },
    {
      alt: 'sampel 3',
      src: '/sample3.jpg',
    }
  ]
  const splideOption = {
    rewind: true,
    height: 600,
    width: '100%',
    gap: '1rem',
    autoplay: true,
    interval: 2000,
  }
  return (
    <main>
      <Header />
      <div className={styles.flex}>
        <div className={styles.center}>
          <Splide aria-label="Top images" options={splideOption}>
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <img src={image.src} alt={image.alt} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>明星大学 建築学部 齊藤哲也 研究室</title>
