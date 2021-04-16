import { Component } from "react";
import { Card } from 'react-bootstrap'
import AddProject from './AddProject'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'


function UserHome(props) {
    const { getProjects, projects } = useContext(UserContext)

    // const addCardHandler = () => {
    //     useState(prevState => {
    //         return { cardCount: prevState.cardCount + 1 };
    //     });
    // };

    const getCards = () => {
        getProjects('')
        const x = projects.map(project => project);
        // console.log(x)
        return x;
    };


    render(){
        let elements = []
        for (let i = 0; i < x.length; i++) {
            console.log(x[i]);
        }


        return (

            <div>
                <AddProject />


                {/* <button onClick={getCards()}>Click me</button>
                {getCards()} */}
            </div>
        );
    }



}

export default UserHome;