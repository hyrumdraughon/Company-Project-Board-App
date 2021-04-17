import React from 'react';
import { Card } from 'react-bootstrap'



export default function ProjectCard({ projects}) {
  


  return projects.map ( project => (

    <Card className="cardSize mx-3" style={{ width: '15%', heigth:'15%' }}>
      <Card.Body>
        <Card.Text className="title">
         { project.label }
          <hr className='hr'></hr>
        </Card.Text>
        <Card.Text className='description'>
        Project Description 
        </Card.Text>
        <Card.Text className='descriptionText'>
          { project.descriptionTextLabel }
        </Card.Text> 
      </Card.Body>
    </Card>
  )
  );
}
