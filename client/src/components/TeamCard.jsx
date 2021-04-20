import React from 'react';
import { Card } from 'react-bootstrap'
import UserCard from './UserCard'



export default function TeamCard({team}) {
  


  return (
    <Card className="cardSize">
      <Card.Body>
        <Card.Text className="title">
        Placeholder Team Name 
        { team.teamName }
          <hr className='hr'></hr>
          {team.text}
        </Card.Text>
        <Card.Text className='description'>
        Team Members 
        </Card.Text>
        <Card.Text className='descriptionText text-center'>
          <UserCard users={team.users}></UserCard>    
        </Card.Text>
      </Card.Body>
    </Card>
  );
}