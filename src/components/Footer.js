import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    return (
        <footer>
            <Link to='/about'>About</Link>
            {location.pathname === '/' && (
                <>
                    <p>Copyright 2023 - Camille Busseau</p>
                    <Link to='/about'>About</Link>
                </>
            )}
        </footer>
    )
}

export default Footer