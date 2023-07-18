//import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import data
//import products from './data/products.js'

//Import components and pages
import Nav from './components/Nav'
import HomePage from './pages/HomePage'; 
import EditorPage from './pages/EditorPage';
import AddSectionPage from './pages/AddSectionPage';
import EditSectionPage from './pages/EditSectionPage';

//import styles and images
//import { GiTeacher } from "react-icons/gi";
import './App.css';
//import logo from './logo.svg';

function App() {

  const [section, setSectionToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Newsletter Editor</h1>
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
        </header>

        <Nav />

        <main>
            <section>

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/editor" element={<EditorPage setSection={setSectionToEdit}/>} />
                <Route path="/addSection" element={<AddSectionPage />} />
                <Route path="/editSection" element={<EditSectionPage sectionToEdit={section} />} />
              </Routes>  

            </section>
        </main>

        <footer>
          <p>Michelle Alexandra Loya &copy; 2023</p>
        </footer>   

      </BrowserRouter>
    </div>
  );
}

export default App;
