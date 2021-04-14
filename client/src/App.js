import React from 'react'

import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './components/ProjectCard'
import TeamCard from './components/TeamCard'
import ViewProject from './components/ViewProject'
import './App.css';
import './index.css'
import './styles/Button.css';
import './styles/ProjectCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DummyText from './testData/dummyText'
import ProjectForm from './components/ProjectForm';
import SolidDivider from './components/SolidDivider';
import NavBar from './components/NavBar';




function App() {
  const viewTestProps = {projectTitle:'This is a test project',teamName:'This is a test team name',projectDescription:DummyText()}
  const addProjectProps = {isAdmin:true}
  const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
  return (
    <>
      <NavBar>{NavHeader}</NavBar>
      <Button></Button>
      <ProjectCard></ProjectCard>
      <TeamCard></TeamCard>
      <ViewProject>{viewTestProps}</ViewProject>
      <SolidDivider></SolidDivider>
      <ProjectForm>{addProjectProps}</ProjectForm>
    </>

  );
}

export default App;
