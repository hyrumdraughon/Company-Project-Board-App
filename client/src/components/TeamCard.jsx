import React from 'react';
import { Card } from 'react-bootstrap'



export default function TeamCard({ teamLabel, teamMemberLabel}) {
  


  return (
    <Card className="cardSize">
      <Card.Body>
        <Card.Text className="title">
        Placeholder Team Name { /* placeholder */}
        { teamLabel }
          <hr className='hr'></hr>
        </Card.Text>
        <Card.Text className='description'>
        Team Members 
        </Card.Text>
        <Card.Text className='descriptionText text-center'>
        <p>Placeholder{ teamMemberLabel }</p>  { /* placeholder */}
        <p>Placeholder{ teamMemberLabel }</p>  { /* placeholder */}
        <p>Placeholder{ teamMemberLabel }</p>  { /* placeholder */}
        <p>Placeholder{ teamMemberLabel }</p>  { /* placeholder */}
          
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}