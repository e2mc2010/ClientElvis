import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const StaffPage = () => (
  <Layout>
    <Seo title="Staff" />
    <h1>Staff</h1>
    <StaticImage
      src="../images/staff-team.jpg"
      alt="Staff Team" 
      placeholder="blurred"
      layout="constrained"
      width={600}
    />
    <p>
      This section introduces you to the passionate and experienced team behind e2mc English Academy.
      Our qualified instructors are committed to creating a supportive learning environment and
      helping you achieve your English language goals.
    </p>
    <h2>Meet Our Team</h2>
    <div>
      <h3>John Doe</h3>
      <p><strong>Position:</strong> Senior Instructor</p>
      <p>
        John Doe has over 10 years of experience teaching English to students of all levels. 
        His dedication to fostering student growth and his innovative teaching methods make him 
        a valued member of our team.
      </p>
      <p>
        <strong>Why e2mc English Academy is the Best:</strong> John believes that our academy 
        stands out because of its personalized approach to learning and its commitment to 
        student success.
      </p>
    </div>
    <div>
      <h3>Jane Smith</h3>
      <p><strong>Position:</strong> Academic Coordinator</p>
      <p>
        Jane Smith plays a key role in curriculum development and ensuring that our courses 
        meet the highest standards. Her attention to detail and passion for education contribute 
        greatly to the quality of our programs.
      </p>
      <p>
        <strong>Why e2mc English Academy is the Best:</strong> Jane believes that our academy 
        stands out because of its supportive community and its focus on continuous improvement 
        in teaching practices.
      </p>
    </div>
    <div>
      <h3>Michael Brown</h3>
      <p><strong>Position:</strong> Student Advisor</p>
      <p>
        Michael Brown is dedicated to guiding students through their learning journey at 
        e2mc English Academy. His friendly demeanor and expert advice ensure that students 
        receive the support they need to succeed.
      </p>
      <p>
        <strong>Why e2mc English Academy is the Best:</strong> Michael believes that our 
        academy's commitment to personalized guidance sets us apart, ensuring that every 
        student receives individual attention and encouragement.
      </p>
    </div>
    <div>
      <h3>Sarah Lee</h3>
      <p><strong>Position:</strong> Marketing Manager</p>
      <p>
        Sarah Lee leads our marketing efforts, spreading awareness about the benefits of 
        learning English at e2mc English Academy. Her creativity and strategic approach 
        help attract new students and promote our academy's mission.
      </p>
      <p>
        <strong>Why e2mc English Academy is the Best:</strong> Sarah believes that our 
        academy's inclusive and dynamic learning environment empowers students to achieve 
        their language goals effectively and confidently.
      </p>
    </div>
  </Layout>
);

export default StaffPage;
