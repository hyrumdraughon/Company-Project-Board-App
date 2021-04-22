import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import TeamCard from './TeamCard';



export default function ProjectCard({ projects, team }) {


  return projects.map(project => (
    <>
      {/* <div > */}

        <Card  className="cardSize mx-3">
          <Link to={{
            pathname: '/viewProject',
            state: {
              projectTitle: project.title,
              teamName: team.teamName,
              projectId: project.id,
              projectDescription: project.description
            }
          }}>
             <b>Project Title</b>
            <Card.Body>
              <Card.Text className="title">
                {project.title}
              </Card.Text>
              <hr className='hr'></hr>
              <Card.Text className='description'>
              <b>Project Description</b><br/>
              </Card.Text>
              <Card.Text className='descriptionText'>
                {project.description}
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>

      {/* </div> */}
    </>
  )
  );
}
