import React, {useContext} from 'react'
import Auth from './components/Auth'
import ViewProjectPage from './components/ViewProjectPage'
import AddProjectUser from './components/AddProjectUser'
import AddProjectAdmin from './components/AddProjectAdmin'
import ViewProfilePage from './components/ViewProfilePage'
import UserHome from './components/UserHome'
import ChangePasswordPage from './components/ChangePasswordPage'
import AdminHomePage from './components/AdminHomePage'
import ProtectedRoute from './shared/ProtectedRoute';
import EditProfileFieldsPage from './components/EditProfileFieldsPage'

import './App.css';
import './index.css'
import './styles/Button.css';
import './styles/ProjectCard.css'
import './styles/addCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider'


function App() {
  // const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}

  const { userId, logout } = useContext(UserContext)

  
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

        <Route path="/changePassword" component={ChangePasswordPage} />


        {/* <Route path="/profile" component={ViewProfilePage} /> */}

        <Route path='/userHome' component={UserHome} />
        <Route path='/adminHomePage' component={AdminHomePage} />
 
        {/* 404 error handling */}
        <Route render={
          () => <h1>404 Not Found</h1>
        } />

      </Switch>





    </>
  );
}

export default App;
