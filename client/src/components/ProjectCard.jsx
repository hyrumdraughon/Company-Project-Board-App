import React from 'react';
import { Card } from 'react-bootstrap'



export default function ProjectCard({ label, descriptionTextLabel}) {
  


  return (
    <Card className="cardSize">
      <Card.Body>
        <Card.Text className="title">
        Placeholder Project Name { /* placeholder */}
         { label }
          <hr className='hr'></hr>
        </Card.Text>
        <Card.Text className='description'>
        Project Description 
        </Card.Text>
        <Card.Text className='descriptionText'>
        PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder { /* placeholder */}
          { descriptionTextLabel }
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
