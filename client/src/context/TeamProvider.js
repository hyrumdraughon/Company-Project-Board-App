import React, {useState, useContext} from 'react'

import axios from 'axios'

export const TeamContext = React.createContext()

function TeamProvider(props) {

    const initState = {
        team: {name: '', text: ''},
        teamId: localStorage.getItem("TeamId") ||  0,
        projects: [],
        users: []
    }

    const [teamState, setTeamState] = useState(initState)

    axios.defaults.baseURL = 'https://api.juliocorzo.com'

    // console.log(teamState)

    // const createTeam = (data) => {
    //     axios.post('/team', data)
    //     .then(res => {
            
    //     })
    // }

    const getTeam = id => {

        axios.get(`/team/${id}`)
            .then( res => {
                console.log(res.data)
                const {teamName, text, projects, id, members} = res.data
                localStorage.setItem("TeamId", id)
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
                console.log(teamState.team.name)
            })

    }

    const getProject = id => {
        axios.get(`/team/${id}/projects`)
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