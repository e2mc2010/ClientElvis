import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const EnglishSkillsPage = () => (
  <Layout>
    <Seo title="English Skills" />
    <h1>English Skills</h1>
    <StaticImage 
      src="../images/englishskills.jpg" 
      alt="English Skills"
      placeholder="blurred"
      layout="constrained"
      width={600}
    />
    <p>
      This section is your one-stop shop for developing a strong foundation and expanding your
      English language abilities. We offer a variety of resources and strategies to help you improve
      in all four core areas: Reading, Writing, Listening, Speaking.
    </p>
    <h2>Reading</h2>
    <p>
      Enhance your reading comprehension through engaging texts and exercises that cover various 
      genres and topics. Develop skills in understanding main ideas, inference, and critical analysis.
    </p>
    <h2>Writing</h2>
    <p>
      Strengthen your writing skills with structured lessons on grammar, vocabulary, and sentence 
      structure. Practice writing essays, reports, emails, and creative pieces to refine your 
      communication skills.
    </p>
    <h2>Listening</h2>
    <p>
      Improve your listening comprehension with audio materials designed to develop your ability 
      to understand spoken English in different accents and speeds. Practice listening for main ideas, 
      details, and context.
    </p>
    <h2>Speaking</h2>
    <p>
      Develop fluency and confidence in speaking English through interactive exercises and speaking 
      tasks. Practice expressing ideas clearly, participating in discussions, and delivering presentations.
    </p>
  </Layout>
);

export default EnglishSkillsPage;

