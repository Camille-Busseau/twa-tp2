import PropTypes from 'prop-types'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({ title, showAdd, onAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* si égale à racine, exécute le bouton */}
            {location.pathname === '/' && (
                <Button text={showAdd ? 'Close' : 'Add'}
                    color={showAdd ? '#d93e0f' : 'green'}
                    onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: "Product Inventory"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header