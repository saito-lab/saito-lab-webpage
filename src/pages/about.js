import * as React from "react"
import * as styles from "./about.module.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"

const ProjectPage = ({ data }) => {
  const staffs = data.allMicrocmsMembers.edges.filter((edge) => edge.node.group.includes('Staff'));
  const students = data.allMicrocmsMembers.edges.filter((edge) => edge.node.group.includes('Student'));

  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1>About</h1>
        現代社会における情報技術の発達と浸透は、人工的な環境の体験・創造・構築の方法だけでなく、
        価値や意味までにも根源的な影響をもたらしています。
        建築情報学では「情報メディアとしての建築」の進化の可能性を以下の側面から捉えています。
        <h1>Member</h1>
        <h2>Staff</h2>
        <ul className={styles.staffList}>
          {staffs.map((staff, i) => (
            <li className={styles.item} key={i}>
              <span className={styles.post}>{staff.node.position}</span>
              <span className={styles.name}>{staff.node.name}</span>
            </li>))}
        </ul>
        <h2>Student</h2>
        <ul className={styles.studentList}>
          {students.map((student, i) => (
            <li className={styles.item} key={i}>
              <span className={styles.post}>{student.node.position}</span>
              <span className={styles.name}>{student.node.name}</span>
            </li>))}
        </ul>
      </div>
      <Footer />
    </main>
  )
}

export const query = graphql`
{
  allMicrocmsMembers(sort: [{ createdAt: DESC }]) {
    edges {
      node {
        id
        group
        position
        name
      }
    }
  }
}`


export default ProjectPage

export const Head = () => <title>About - 明星大学 建築学部 齊藤哲也 研究室</title>
