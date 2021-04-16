import { Component } from "react";
import { Card } from 'react-bootstrap'
import AddProject from './AddProject'
import { useContext }  from 'react'
import { UserContext } from '../context/UserProvider'



export class UserHome extends Component{
    constructor(props) {
        
            super(props);
            this.state = {
                cardCount: 0
            };
        };

        addCardHandler = () => {
            this.setState(prevState => {
                return { cardCount: prevState.cardCount + 1 };
            });
        };

        getCards = () => {
            let cards = 0 // This is just fixing a syntax error so client can compile. You can remove this for the actual logic during a merge conflict.
            for (let i = 0; i < this.state.cardCount; i++) {
                cards.push(<Card />);
            }
            return cards;
        };

        render() {
            return (

                <div>
                <AddProject />


                    <button onClick={this.addCardHandler}>Click me</button>
                    {this.getCards()}
                </div>
            );
        }




    }

    export default UserHome;