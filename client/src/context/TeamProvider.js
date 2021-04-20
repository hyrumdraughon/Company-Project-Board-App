import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../context/UserProvider'

import axios from 'axios'

export const TeamContext = React.createContext()

function TeamProvider(props) {

    const initState = {
        team: {name: '', text: ''},
        teamId: localStorage.getItem("TeamId") ||  0,
        projects: [],
        users: []
    }

    const {user} = useContext(UserContext)
    const teamId = user.teamId

    const [teamState, setTeamState] = useState(initState)

    axios.defaults.baseURL = 'https://api.juliocorzo.com'

    // console.log(teamState)

    // const createTeam = (data) => {
    //     axios.post('/team', data)
    //     .then(res => {
            
    //     })
    // }

    

    const getTeam = () => {
        axios.get(`/team/${teamId}`)
            .then( res => {
                const {teamName, text, projects, id, members} = res.data
                // localStorage.setItem("TeamId", id)
                setTeamState(prevState => ({
                    ...prevState,
                    team: {
                        name: teamName,
                        text: text
                    },
                    teamId: id,
                    projects: projects,
                    users: members
                }))
            })
    }

    const getProject = () => {
        axios.get(`/team/${teamId}/projects`)
            .then( res => res.data)
            .then(listOfProjects => setTeamState(
                    prevState => ({
                        ...prevState, projects: listOfProjects
                    })
                )
            )
    }

    return (
        <TeamContext.Provider value={{
            team: teamState.team,
            teamId: teamState.teamId,
            projects: teamState.projects,
            users: teamState.users,
            getTeams: getTeam,
            getProjects: getProject
        }} >
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamProvider