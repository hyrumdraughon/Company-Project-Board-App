import NavLinks from './NavLinks'
import './navbar.css'

import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { CompanyContext } from '../context/CompanyProvider'


const NavBar = () => {
    const {user} = useContext(UserContext)
    const {company, getCompany} = useContext(CompanyContext)

    if(company == undefined || (user.companyId != company.id)){
        getCompany(user.companyId)
    }
    let companyName = ''
    if(company != undefined){
        companyName = company.name
    }
    return(
        <div className="header">
            <p className="companyName">{companyName}</p>
            <NavLinks></NavLinks>
        </div>
            
    )
}

export default NavBar