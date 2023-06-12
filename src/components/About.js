import { Link } from "react-router-dom"
const About = () => {
    return(
        <div className="about">
            <h4>About App</h4>
            <p>Je suis une application React. Je suis la version 0.0</p>
            <Link to="/">Retour</Link>
        </div>
    )
}

export default About