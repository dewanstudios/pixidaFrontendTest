import { Route, Routes } from "react-router-dom";
import "./App.css";
import Artworks from "./components/artworks/Artworks";
import Footer from "./components/footer/footer";
import { Searchbarholder } from './components/searchbarholder/Searchbarholder'
import ImageCTXProvider from "./context/ImageCTX";
import Details from "./components/artworks/Details";



// create Context 



function App() {


  return (
    <ImageCTXProvider>
      <div className="app">
        <Searchbarholder />
        <Routes>
          <Route path="*" element={<Artworks />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </ImageCTXProvider>
  )
}

export default App
