import { useRef } from 'react';
import './App.css';
import AboutPage from './views/aboutPage/AboutPage';
import ContactPage from './views/contactPage/ContactPage';
import HomePage from './views/homePage/HomePage';
import ProjectsPage from './views/projectsPage/ProjectsPage';

// window.addEventListener('wheel', (e) => {
//   // e.preventDefault()
//   window.scrollBy({
//     left: e.deltaY,
//     behavior: 'smooth'
//   })
//   console.log(e)
// })

function App() {
  return (
    <div className="App">

      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
