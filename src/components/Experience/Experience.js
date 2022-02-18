import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DayNightToggle from "react-day-and-night-toggle";
import { ProjectContainer, ProjectHeader , Projectdiv} from "./ExperienceElement";

class Experience extends Component {

  constructor(props) {
    super();
    this.state = {
      checked: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState((state) => ({
      checked: e.target.checked,
    }));
  }

  projects = [
    {
      id: 1,
      name: "Pizza Server",
      description:
        "it is a web application for pizzeria, where a customer can make orders and see the details of their order, an employee can see the list of orders and process them accordingly",
    },
    {
      id: 2,
      name: "Title Transfer",
      description:
        "Its a python project on vehicle title transfer using the mock blockchain technology using nodes",
    },
    {
      id: 3,
      name: "Reimbursement system",
      description:
        "Web application based on employee reimbursement transcation between an Employee and the Manager",
    },
  ];

  projectList = this.projects.map((project) => {
    return (
      <Card key={project.id}>
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description >
            {project.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Thumbs Up
            </Button>
            <Button basic color="red">
              Thumbs Down
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  });

  render() {
    return (
      <ProjectContainer id="experience">
       <br />
       <br />
        <ProjectHeader>Projects</ProjectHeader>
        <Card.Group
          centered
          style={{ margin: "250px 100px 100px 100px" }}
        >{this.projectList}</Card.Group>
      </ProjectContainer>
    );
  }
}

export default Experience;
