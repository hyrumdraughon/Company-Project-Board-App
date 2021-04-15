import React, {useContext} from 'react'

import Button from './components/Button'
import ProjectCard from './components/ProjectCard'
import TeamCard from './components/TeamCard'
import ViewProject from './components/ViewProject'
import Login from './components/Login'
import DummyText from './testData/dummyText'
import ProjectForm from './components/ProjectForm';
import SolidDivider from './components/SolidDivider';
import NavBar from './components/NavBar';
import AddProject from './components/AddProject'
import AddTeam from './components/AddTeam'
import ViewProjectPage from './components/ViewProjectPage'
import UserHome from './components/UserHome'

import './App.css';
import './index.css'
import './styles/Button.css';
import './styles/ProjectCard.css'
import './styles/addCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './shared/ProtectedRoute';

function App() {
  const addProjectProps = {isAdmin:true}
  const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}

  const { userId, logout } = useContext(UserContext)
  return (
    <>
        
      <Switch>
        <Route exact path="/" render={rProps => userId ? <Redirect to='/Home'/> : <Login {...rProps} />} />

        <ProtectedRoute path="/Home" components={ViewProject} redirectTo="/" />

        <Route exact path = "/viewProject" component={ViewProjectPage}/>
 
        {/* 404 error handling */}
        <Route render={
          () => <h1>404 Not Found</h1>
        } />

      </Switch>
      <UserHome></UserHome>

    </>
  );
}

export default App;
