import "./Navbar.css";

// import githublogo from '../../assets/logos/github.png'


export const Navbar = () => {
    return (
        <div className="wrapper-navbar">
            <div className="sitename">Attendance75</div>
            <a style={{textDecoration: 'none'}} href="https://github.com/amitayas/attendance75">
            <div className="forkongithub">Fork on Github</div>
            </a>
            {/* <img id="github-logo" src={githublogo} alt="GitHub Logo" /> */}
        </div>
    );
}