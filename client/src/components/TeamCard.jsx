import React from 'react';
import { Card } from 'react-bootstrap'



export default function TeamCard({ label, teamMemberLabel}) {
  


  return (
    <Card className="cardSize">
      <Card.Body>
        <Card.Text className="title">
        Placeholder Team Name { /* placeholder */}
         { label }
          <hr className='hr'></hr>
        </Card.Text>
        <Card.Text className='description'>
        Team Members 
        </Card.Text>
        <Card.Text className='descriptionText text-center'>
        <p>Placeholder</p>  { /* placeholder */}
        <p>Placeholder</p>  { /* placeholder */}
        <p>Placeholder</p>  { /* placeholder */}
        <p>Placeholder</p>  { /* placeholder */}
          { teamMemberLabel }
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}