import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import TeamCard from './TeamCard';



export default function ProjectCard({ projects, team }) {


  return projects.map(project => (
    <>
      <div>
        <Link to={{
          pathname: '/viewProject',
          state: {
            projectTitle: project.title,
            teamName: team.teamName,
            projectDescription: project.description
          }
        }}>{project.name}
          <Card className="cardSize mx-3" style={{ width: '15%', heigth: '15%' }}>
            <Card.Body>
              <Card.Text className="title">
                {project.title}
                <hr className='hr'></hr>
              </Card.Text>
              <Card.Text className='description'>
                Project Description
        </Card.Text>
              <Card.Text className='descriptionText'>
                {project.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  )
  );
}
