import React, {useState, useContext} from 'react'

import axios from 'axios'

export const TeamContext = React.createContext()

function TeamProvider(props) {

    const initState = {}

    const [teamState, setTeamState] = useState(initState)

    const createTeam = (data) => {
        axios.post('/team', data)
        .then(res => {
            
        })
    }

    return (
        <TeamContext.Provider value={{

        }} >
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamProvider