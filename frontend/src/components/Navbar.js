import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { loginWithRedirect, logout, user, isLoading } = useAuth0()

    return (
        <div>
            <header>
            <div className="navbar">
                    <Link className="nav-link" to='/'>
                        Homepage
                    </Link>
                    {user && (
                        <Link className="nav-link" to='/add-blog'>
                            Add Blog
                        </Link>
                    )}

                    {!isLoading && !user && (
                        <button className="nav-link" onClick={() => loginWithRedirect()}>
                            log in
                        </button>
                    )}
                    {!isLoading && user && (
                        <button className="nav-link" onClick={() => logout()}>
                            log out
                        </button>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Navbar