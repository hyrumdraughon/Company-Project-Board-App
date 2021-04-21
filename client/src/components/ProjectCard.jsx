import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import TeamCard from './TeamCard';



export default function ProjectCard({ projects, team }) {


  return projects.map(project => (
    <>
      <div className="cardSize mx-3" >

        <Card className="cardSize mx-3" >
          <Link style={{ width: '15%', heigth: '15%' }} to={{
            pathname: '/viewProject',
            state: {
              projectTitle: project.title,
              teamName: team.teamName,
              projectDescription: project.description
            }
          }}>{project.name}
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
          </Link>
        </Card>

      </div>
    </>
  )
  );
}
