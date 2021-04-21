import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const CompanyContext = React.createContext()

function CompanyProvider(props) {
    const initState = {
        allCompanies: [],
        companyTeams: [],
        companyProjects: [],
        company: undefined
    }

    const [companyState, setCompanyState] = useState(initState)

    axios.defaults.baseURL = 'https://api.juliocorzo.com'


    const getCompanies = () => {
        axios.get('/company')
        .then(res => {
            setCompanyState(prevState => ({...prevState, allCompanies: res.data}))
        })
    }

    const getCompany = (companyId) => {
        axios.get('/company/'+companyId)
        .then(res => {
            console.log(res)
            setCompanyState(prevState => ({...prevState, company: res.data}))
        })
    }

    const getCompanyTeams = (companyId) => {
        axios.get(`/company/${companyId}/teams`)
        .then(res => {
            setCompanyState(prevState => ({...prevState, companyTeams: res.data}))
        })
    }

    const getCompanyProjects = (companyId) => {
        axios.get(`/company/${companyId}/projects`)
        .then(res => {
            setCompanyState(prevState => ({...prevState, companyProjects: res.data}))
        })
    }

    return (
        <CompanyContext.Provider value={{
            allCompanies: companyState.allCompanies,
            companyTeams: companyState.companyTeams,
            getCompanies: getCompanies,
            getCompanyTeams: getCompanyTeams,
            getCompanyProjects: getCompanyProjects,
            company: companyState.company,
            getCompany: getCompany
        }} >
        {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyProvider