import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const {loginWithRedirect,logout, user, isLoading} = useAuth0()

    return (
        <div>
            <header>
                <div> 
                    <Link   style={{textDecoration: 'none'}}to='/'>
                        Homepage
                    </Link>
                    <Link   style={{textDecoration: 'none'}}to='/add-blog'>
                        Add Blog
                    </Link>
                    <Link style={{textDecoration: "none"}}to="/add-user">Create Account</Link>

                </div>
                {!isLoading && !user && (
                    <button
                    onClick={() => loginWithRedirect()}
                    >
                    log in
                    </button>
    )}
                    {!isLoading && !user && (
                    <button
                    onClick={() => logout()}
                    >
                    log out
                    </button>
    )}
            </header>
        </div>
    )
}

export default Navbar