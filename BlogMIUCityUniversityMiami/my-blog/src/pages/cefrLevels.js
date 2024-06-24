import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const CefrLevelsPage = () => (
  <Layout>
    <Seo title="CEFR Levels" />
    <h1>CEFR Levels</h1>
    <StaticImage
      src="../images/cefrlevels.jpg"
      alt="CEFR Levels"
      placeholder="blurred"
      layout="constrained"
      width={600}
    />
    <p>
      This section helps you determine your current level of English proficiency according to the
      Common European Framework of Reference for Languages (CEFR). Here you will find descriptions
      of each CEFR level (A1-C2), skills you can expect to develop at each level, and resources to
      assess your proficiency.
    </p>
    <p>
      <strong>A1 (Beginner):</strong> At the A1 level, you can understand and use familiar everyday 
      expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. You 
      can introduce yourself and others, and can ask and answer questions about personal details such 
      as where you live, people you know, and things you have. You can interact in a simple way 
      provided the other person talks slowly and clearly and is prepared to help.
    </p>
    <p>
      <strong>A2 (Elementary):</strong> At the A2 level, you can understand sentences and frequently 
      used expressions related to areas of most immediate relevance (e.g., very basic personal and 
      family information, shopping, local geography, employment). You can communicate in simple and 
      routine tasks requiring a simple and direct exchange of information on familiar and routine 
      matters. You can describe in simple terms aspects of your background, immediate environment, and 
      matters in areas of immediate need.
    </p>
    <p>
      <strong>B1 (Intermediate):</strong> At the B1 level, you can understand the main points of clear 
      standard input on familiar matters regularly encountered in work, school, leisure, etc. You can 
      deal with most situations likely to arise whilst travelling in an area where the language is spoken. 
      You can produce simple connected text on topics that are familiar or of personal interest. You can 
      describe experiences and events, dreams, hopes, and ambitions, and briefly give reasons and explanations 
      for opinions and plans.
    </p>
    <p>
      <strong>B2 (Upper-Intermediate):</strong> At the B2 level, you can understand the main ideas of complex 
      text on both concrete and abstract topics, including technical discussions in your field of specialization. 
      You can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers 
      quite possible without strain for either party. You can produce clear, detailed text on a wide range of subjects 
      and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.
    </p>
    <p>
      <strong>C1 (Advanced):</strong> At the C1 level, you can understand a wide range of demanding, longer texts, 
      and recognize implicit meaning. You can express ideas fluently and spontaneously without much obvious searching 
      for expressions. You can use language flexibly and effectively for social, academic, and professional purposes. 
      You can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organizational 
      patterns, connectors, and cohesive devices.
    </p>
    <p>
      <strong>C2 (Proficient):</strong> At the C2 level, you can understand with ease virtually everything heard or 
      read. You can summarize information from different spoken and written sources, reconstructing arguments and accounts 
      in a coherent presentation. You can express yourself spontaneously, very fluently, and precisely, differentiating 
      finer shades of meaning even in more complex situations.
    </p>
  </Layout>
);

export default CefrLevelsPage;
