import React from 'react';
import { Card } from 'react-bootstrap'
import UserCard from './UserCard'



const TeamCard = ({ companyTeams }) => {
  console.log(companyTeams)


  return (companyTeams.teamName != "" ? companyTeams.map(teams =>  (
    <Card className="cardSize mx-3">
      <Card.Body>
        <Card.Text className="title">
        <b>Team Name</b><br/>
        {teams.teamName}
          <hr className='hr'></hr>
          <b>Team Description</b><br/>
          {teams.text}
          <hr className='hr'></hr>
        </Card.Text>
        <Card.Text className='description'>
          <b>Team Members</b>
        </Card.Text>
        <Card.Text className='descriptionText text-center'>
          <UserCard users={teams.members}></UserCard>
        </Card.Text>
      </Card.Body>
    </Card>
  )
  ) : <div></div>)
}


export default TeamCard;