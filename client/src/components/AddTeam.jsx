import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs'


export default function addTeam() {



    return (
        <>
            <Link to='/teamPage'>   {/* need to update link */}
                <Card >
                    <Card.Body className="plusCardSize">
                        <div className='plus '>
                            <span >
                                <BsFillPlusCircleFill size={169} />
                            </span>
                        </div>

                    </Card.Body>
                </Card>
            </Link>
        </>
    );
}