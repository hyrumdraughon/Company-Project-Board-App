import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const CompanyContext = React.createContext()

function CompanyProvider(props) {
    const initState = {
        allCompanies: []
    }

    const [companyState, setCompanyState] = useState(initState)

    axios.defaults.baseURL = 'http://97.87.163.218:9999'


    const getCompanies = () => {
        axios.get('/company')
        .then(res => {
            setCompanyState(prevState => ({...prevState, allCompanies: res.data}))
        })
    }

    return (
        <CompanyContext.Provider value={{
            allCompanies: companyState.allCompanies,
            getCompanies: getCompanies
        }} >
        {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyProvider