import React from 'react'

import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './components/ProjectCard'
import ViewProject from './components/ViewProject'
import './App.css';
import './index.css'
import './styles/Button.css';


function App() {
  return (
    <>
      <Button></Button>
      <ProjectCard></ProjectCard>
      <ViewProject/>
    </>

  );
}

export default App;
