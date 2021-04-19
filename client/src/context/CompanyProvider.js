import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const CompanyContext = React.createContext()

function CompanyProvider(props) {
    const initState = {
        allCompanies: [],
        companyTeams: [],
        companyProjects: []
    }

    const [companyState, setCompanyState] = useState(initState)

    axios.defaults.baseURL = 'http://97.87.163.218:9999'


    const getCompanies = () => {
        axios.get('/company')
        .then(res => {
            setCompanyState(prevState => ({...prevState, allCompanies: res.data}))
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
            getCompanies: getCompanies,
            getCompanyTeams: getCompanyTeams,
            getCompanyProjects: getCompanyProjects
        }} >
        {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyProvider