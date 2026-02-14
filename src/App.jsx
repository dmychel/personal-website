// npm package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import { About } from "./routes/About";
import { Culture } from "./routes/Culture";

// components
import { Header } from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/photography/culture' element={<Culture />} />
        </Routes>
      </main>
    </BrowserRouter>



  )
}

export default App
