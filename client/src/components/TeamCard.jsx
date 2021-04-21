import React from 'react';
import { Card } from 'react-bootstrap'
import UserCard from './UserCard'



export default function TeamCard({ companyTeams }) {
  console.log(companyTeams)


  return companyTeams.map(teams =>  (
    <Card className="cardSize">
      <Card.Body>
        <Card.Text className="title">
          Placeholder Team Name
        {teams.teamName}
          <hr className='hr'></hr>
          {teams.text}
        </Card.Text>
        <Card.Text className='description'>
          Team Members
        </Card.Text>
        <Card.Text className='descriptionText text-center'>
          <UserCard users={teams.members}></UserCard>
        </Card.Text>
      </Card.Body>
    </Card>
  )
  )
}