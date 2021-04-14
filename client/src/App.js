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
  const viewTestProps = {projectTitle:'This is a test project',teamName:'This is a test team name',projectDescription:DummyText()}
  const addProjectProps = {isAdmin:true}
  const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}

  const { userId, logout } = useContext(UserContext)
  return (
    <>
      <NavBar>{NavHeader}</NavBar>
        
      <Switch>
        <Route extact path="/" render={rProps => userId ? <Redirect to='/Home'/> : <Login {...rProps} />} />

        <ProtectedRoute path="/Home" components={ViewProject} redirectTo="/" />
 
        {/* 404 error handling */}
        <Route render={
          () => <h1>404 Not Found</h1>
        } />

      </Switch>
      <AddProject></AddProject>
      <AddTeam></AddTeam>
      <Button />
      <ProjectCard />
      <TeamCard/>

    </>
  );
}

export default App;
