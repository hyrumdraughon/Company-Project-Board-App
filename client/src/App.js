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




function App() {
  const viewTestProps = {projectTitle:'This is a test project',teamName:'This is a test team name',projectDescription:DummyText()}
  return (
    <>
      <Button></Button>
      <ProjectCard></ProjectCard>
      <TeamCard></TeamCard>
      <ViewProject>{viewTestProps}</ViewProject>
    </>

  );
}

export default App;
