import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const blogLinks = [
  {
    text: "e2mc English Academy",
    url: "/eemcEnglishAcademy",
    description:
      "Empower your communication skills and unlock a world of opportunity with e2mc English Academy. We offer personalized English language courses to help you achieve your goals, from mastering daily conversation to excelling in business English.",
  },
  {
    text: "CEFR Levels",
    url: "/cefrLevels",
    description:
      "This section helps you determine your current level of English proficiency according to the Common European Framework of Reference for Languages (CEFR). Here you will find: Descriptions of each CEFR level (A1-C2). Skills you can expect to develop at each level. Resources to assess your proficiency.",
  },
  {
    text: "English Skills",
    url: "/englishSkills",
    description:
      "This section is your one-stop shop for developing a strong foundation and expanding your English language abilities. We offer a variety of resources and strategies to help you improve in all four core areas:\n Reading: Enhance your comprehension and vocabulary through engaging materials.\n Writing: Master grammar, sentence structure, and clear communication.\n Listening: Develop strong listening comprehension skills for everyday conversations and various accents.\n Speaking: Build confidence and fluency in expressing yourself effectively.\n Discover how to enhance your Gatsby site with a vast array of plugins contributed by the developer community.",
  },
  {
    text: "Staff",
    url: "/staff",
    description:
      "This section introduces you to the passionate and experienced team behind e2mc English Academy. Our qualified instructors are committed to creating a supportive learning environment and helping you achieve your English language goals.",
  },
]


const internalLinks = [
  {
    text: "Second Page",
    url: "page-2",
    badge: false,
    description:
      "Learn how to link to other pages within your Gatsby site effortlessly.",
  },
  { text: "Using TypeScript", url: "using-typescript" },
  { text: "Server-Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const additionalLinks = [
  { text: "English Grammar Guide", url: "https://gatsby.dev/discord" },
  {
    text: "Fun English Learning Games",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "English Podcasts for Beginners",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "English YouTube Channel",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "English Conversation Practice",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`


const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/e2mc.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="e2mc logo"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>e2mc Blog</b>
      </h1>
      <p className={styles.intro}>
        <b>Explore our pages:</b>{" "}
        {internalLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== internalLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to customize this page.
      </p>
    </div>
    <ul className={styles.list}>
      {blogLinks.map(link => (
        <li key={link.url} className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            to={link.url}
          >
            {link.text} ↗
          </Link>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {additionalLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== additionalLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
