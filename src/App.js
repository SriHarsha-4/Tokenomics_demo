import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Design from "./routes/Design";
import Audit from "./routes/Audit";
import Consulting from "./routes/Consulting";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" caseSensitive element={<Home />} />
        <Route path="/design" caseSensitive element={<Design />} />
        <Route path="/audit" caseSensitive element={<Audit />} />
        <Route path="/consult" caseSensitive element={<Consulting />} /> 
        <Route path="/about" caseSensitive element={<About />} /> 
        <Route path="/contact" caseSensitive element={<Contact />} /> 
        
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
