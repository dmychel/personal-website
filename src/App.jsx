// npm package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// routes
import { Index } from "./routes/Index";
import { About } from "./routes/About";
import { Streets } from "./routes/Streets";
import { Culture } from "./routes/Culture";
import { Portraits } from "./routes/Portriats";
import { Bulletin } from "./routes/Bulletin";
import { Error } from "./routes/Error";

// components
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/photography/portraits' element={<Portraits />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography/streets" element={<Streets />} />
          <Route path="/photography/rbdys" element={<Culture />} />
          <Route path="/photography/bulletin" element={<Bulletin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>



  )
}

export default App
