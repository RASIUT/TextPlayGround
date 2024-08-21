import {Link} from "react-router-dom";
const Navbar = (props) => {
    return(
        <nav className={`navbar navbar-expand-lg  px-5 mb-3`} style={props.navbarColor}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === "Dark Mode" ? "light" : "dark"}`} to="/">Text PlayGround</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={props.navbarColor} id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={props.navbarColor}>
                        <Link className={`nav-link active text-${props.mode === "Dark Mode" ? "light" : "dark"}`} aria-current="page" to="/">Home</Link>
                        <Link className={`nav-link text-${props.mode === "Dark Mode" ? "light" : "dark"}`} to="/about">About</Link>
                        <Link className={`nav-link text-${props.mode === "Dark Mode" ? "light" : "dark"}`} to="https://www.github.com/RASIUT" target="blank">GitHub</Link>
                    </div>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" forhtml="flexSwitchCheckDefault">Enable {props.mode==="Light Mode" ? "Dark Mode" : "Light Mode"}</label>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;