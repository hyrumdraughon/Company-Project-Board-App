import NavLinks from './NavLinks'
import './navbar.css'

import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { CompanyContext } from '../context/CompanyProvider'
import { TeamContext } from '../context/TeamProvider'


const NavBar = () => {
    const {user} = useContext(UserContext)
    const {company, getCompany} = useContext(CompanyContext)
    const {team, getTeam} = useContext(TeamContext)

    if(team == undefined){
        getTeam()
    }


    if(company == undefined || (user.companyId != company.id)){
        getCompany(user.companyId)
    }
    let companyName = ''
    if(company != undefined){
        companyName = company.name
    }
    
    const header = companyName + " - " + team.name;
    return(
        <div className="header">
            <p className="companyName">{header}</p>
            <NavLinks></NavLinks>
        </div>
            
    )
}

export default NavBar