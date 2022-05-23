import "./Navbar.css";

import githublogo from '../../assets/logos/github.png'


export const Navbar = () => {
    return (
        <div className="wrapper-navbar">
            <div className="sitename">Attendance75</div>
            <div className="forkongithub">Fork on Github</div>
            <img id="github-logo" src={githublogo} alt="GitHub Logo" />
        </div>
    );
}