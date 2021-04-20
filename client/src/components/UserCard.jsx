import React from 'react';
import { Card } from 'react-bootstrap'



export default function UserCard({users}) {



  return users.map(user => (
    <>
        <p className='descriptionText text-center'>
            {user.profile.firstName}
        </p>
    </>
  )
  );
}
