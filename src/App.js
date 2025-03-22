import Tae from './tae/Tae';
import Smyoon from './smyoon/Smyoon';
import Scr_yj from './scr_yj/Scr_yj';
import AppS from './ys/SYS/AppS'
import Hyun from './sh/Hyun/Hyun'

import  Header  from "./header/Header"; // Header 컴포넌트를 import

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PageAbout, PageGallery, PageHome, PageNews, PageSports, PageYoutube } from "./pages";


console.groupCollapsed("src/App.js");console.groupEnd();

function App(props) {
    console.groupCollapsed("f App(", props, ") invoked.");console.groupEnd();

    return (
        <div>
            <Router>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Hyun/>} />
                        <Route path="/Smyoon" element={<Smyoon/>} />
                        <Route path="/Scr_yj" element={<Scr_yj/>} />
                        <Route path="/AppS" element={<AppS/>} />
                        <Route path="/Tae" element={<Tae/>} />
                    </Routes>
                    
                </div>
            </Router>

        </div>
    );
}

export default App;
