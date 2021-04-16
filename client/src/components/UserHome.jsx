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

<<<<<<< HEAD
        getCards = () => {
            let cards = 0 // This is just fixing a syntax error so client can compile. You can remove this for the actual logic during a merge conflict.
            for (let i = 0; i < this.state.cardCount; i++) {
                cards.push(<Card />);
            }
            return cards;
        };
=======
    render(){
        let elements = []
        for (let i = 0; i < x.length; i++) {
            console.log(x[i]);
        }
>>>>>>> iss25

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