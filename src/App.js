import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;




//  install tailwind css

// install react-icons

// import forms from google fonts - raleway, 

// @layer base{
//     html{
//         font-family: 'Raleway', sans-serif; - in index.css
//     }
// }


// change code in tailwind.js - 


// deploying ---

// => git add .

// =>git commit -m 'project done'

// //push to existing repository from the command line 

// =>git remote add origin https://github.com/SravaniPutturu/My-Portpolio.git
// git branch -M main
// git push -u origin main 