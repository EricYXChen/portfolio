// Components

import Portfolio from "./portfolio";

import ResumeViewer from "./components/ResumeViewer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path ="/" element = {<Portfolio />} />
        <Route path ="/resume" element ={<ResumeViewer/>} />
      </Routes>

    </Router>
  )
}

export default App;