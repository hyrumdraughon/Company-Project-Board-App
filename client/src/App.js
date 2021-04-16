import React, {useContext} from 'react'

import Button from './components/Button'
import ProjectCard from './components/ProjectCard'
import TeamCard from './components/TeamCard'
import ViewProject from './components/ViewProject'
import Auth from './components/Auth'
import DummyText from './testData/dummyText'
import ProjectForm from './components/ProjectForm';
import SolidDivider from './components/SolidDivider';
import NavBar from './components/NavBar';
import AddProject from './components/AddProject'
import AddTeam from './components/AddTeam'
import ViewProjectPage from './components/ViewProjectPage'

import AddProjectUser from './components/AddProjectUser'
import AddProjectAdmin from './components/AddProjectAdmin'
import ViewProfilePage from './components/ViewProfilePage'
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
import EditProfileFieldsPage from './components/EditProfileFieldsPage'

function App() {
  // const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}

  const { userId, logout } = useContext(UserContext)

  console.log(userId)
  return (
    <>
        
      <Switch>
        <Route exact path="/" render={rProps => userId ? <Redirect to='/profile'/> : <Auth {...rProps} />} />

        {/* <ProtectedRoute path="/Home" components={ViewProject} redirectTo="/" /> */}
{/* 
        <ProtectedRoute path="/viewProject" component={ViewProjectPage} redirectTo="/" />

        <ProtectedRoute path="/addProjectUser" component={AddProjectUser} redirectTo="/"/>

        <ProtectedRoute path="/addProjectAdmin" component={AddProjectAdmin} redirectTo="/"/>
*/}
        <ProtectedRoute path="/profile" component={ViewProfilePage} redirectTo="/"/>

        <ProtectedRoute path = "/editProfile" component={EditProfileFieldsPage}/>
        
        <Route path="/viewProject" component={ViewProjectPage} />

        <Route path="/addProjectUser" component={AddProjectUser} />

        <Route path="/addProjectAdmin" component={AddProjectAdmin} />


        {/* <Route path="/profile" component={ViewProfilePage} /> */}

        <Route path='/userHome' component={UserHome} />
 
        {/* 404 error handling */}
        <Route render={
          () => <h1>404 Not Found</h1>
        } />

      </Switch>



    </>
  );
}

export default App;
