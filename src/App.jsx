import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './main/pages/Home.jsx'
import NotFound from './main/pages/NotFound.jsx'
import NavBar from "./components/NavBar.jsx";
import Login from "./main/pages/Login.jsx";
import Signup from "./main/pages/Signup.jsx";
import Notiftoast from "./components/Notiftoast.jsx";
import Images from "./main/pages/Images.jsx";
import Projects from "./main/pages/Projects.jsx";
import Games from "./main/pages/Games.jsx";
import Game from "./main/pages/Game.jsx";

const NAVBAR_ROUTES = ['/', '/about', '/contact', '/projects']
const NAVBAR_PREFIXES = ['/dashboard', '/profile', '/games']

export default function App() {
    const location = useLocation()

    const showNavBar = NAVBAR_ROUTES.includes(location.pathname) ||
        NAVBAR_PREFIXES.some(prefix => location.pathname.startsWith(prefix))

    return (
        <>
            {showNavBar && <NavBar />}
            <Notiftoast />
            <Routes>

                { /* HOME ROUTES */}
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/games" element={<Games />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />

                {/* GAME ROUTES */}
                <Route path="/games/:gameDirectory" element={<Game />} />

                {/* PROJECT ROUTES*/}
                <Route path="/projects/img" element={<Images />} />
            </Routes>
        </>
    )
}