import React from 'react'

import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './components/ProjectCard'
import ViewProject from './components/ViewProject'
import './App.css';
import './index.css'
import './styles/Button.css';
import DummyText from './testData/dummyText'
import ProjectForm from './components/ProjectForm';



function App() {
  const viewTestProps = {projectTitle:'This is a test project',teamName:'This is a test team name',projectDescription:DummyText()}
  const addProjectProps = {isAdmin:true}
  return (
    <>
      <Button></Button>
      <ProjectCard></ProjectCard>
      <ViewProject>{viewTestProps}</ViewProject>
      <ProjectForm>{addProjectProps}</ProjectForm>
    </>

  );
}

export default App;
