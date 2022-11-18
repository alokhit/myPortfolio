import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
// import myImg from "../Assets/my-avatar.jpg";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://github.com/alokhit/Sreenshots-/blob/main/jioMart.png?raw=true"
              title="Jio Mart"
              description="This is an E-Commerce website which speciaizes in groceries and styling products. The website contains products of different types of earrings, necklaces, rings, bracelets, cloths,electronics etc."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | Redux "
              link="https://jiomart-prototype.netlify.app/"
              a="https://github.com/Sibghataziz/JioMartClone"
            />
          </Col>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://github.com/alokhit/Sreenshots-/blob/main/bitrix24.png?raw=true"
              title="Bitrix24"
              description="This is a clone of Bitrix24 website. From Homepage, Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing Status, Calendar Todo-Adding-Deleting. We have cloned every functionalities. In this project my part was FEED Page."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://luxury-monstera-f34825.netlify.app"
              a="https://github.com/DeepakVats123/Bitrix24-Clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/alokhit/Sreenshots-/blob/main/ketto.png?raw=true"
              title="Ketto"
              description="Ketto is an Online Crowdfunding platform and Website in India for fundraising of Social, Charity, Movies, Music, Personal and Creative causes. Visit us online! It is created with the help of JavaScript Html and Css."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://sprightly-sherbet-a8a97a.netlify.app/"
              a="https://github.com/pchejara1/CW-Ketto"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/to-do%201.PNG?raw=true"
              title="To-Do-List"
              description="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules. It is created by JavaScript, Html, Css languages."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://iridescent-granita-ec6794.netlify.app/"
              a="https://github.com/Rushikesh7997/To-Do-List-App"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
