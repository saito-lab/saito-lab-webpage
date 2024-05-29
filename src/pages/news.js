import * as React from "react"
import * as styles from "./news.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"

const NeasPage = () => {
  const news = [
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample1.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample2.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample3.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample1.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample2.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample3.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample1.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample2.jpg",
    },
    {
      title: "国立代々木競技場 第一体育館・第二体育館 見学",
      date: "2024/05/20",
      image: "/sample3.jpg",
    },
  ]
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1>News</h1>
        <ul className={styles.newsList}>
          {news.map((item, i) => (
            <li className={styles.item} key={i}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.text}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.title}>{item.title}</span>
              </div>
            </li>))}
        </ul>
      </div>
      <Footer />
    </main>
  )
}

export default NeasPage

export const Head = () => <title>News - 明星大学 建築学部 齊藤哲也 研究室</title>
