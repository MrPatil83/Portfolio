import styles from "./App.module.css";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import ProjectsPage from "./components/Projects/ProjectsPage";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProjectsPage />
      <Contact/>
    </div>
  );
}

export default App;