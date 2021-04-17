import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs'


export default function addProject() {



    return (
        <>
            <Link className='mx-3' to='/addProjectUser'>   {/* need to update link */}
                <Card className="card">
                    <Card.Body className="plusCardSize">
                        <div className='plus '>
                            <span >
                                <BsFillPlusCircleFill size={35} />
                            </span>
                        </div>

                    </Card.Body>
                </Card>
            </Link>
        </>
    );
}