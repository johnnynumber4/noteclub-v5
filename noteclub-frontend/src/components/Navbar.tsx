import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

function Navbar() {
    const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <header>
            <div className="container-fluid position-relative no-side-padding">
                <span className="logo">
                {user && user.picture && <img src={user.picture} alt="My Avatar" />}
                </span>

                <div className="menu-nav-icon" data-nav-menu="#main-menu">
                    <i className="ion-navicon" />
                </div>

                <ul className="main-menu visible-on-click" id="main-menu">
                    <li><Link className={"nav-link"} to={"/"}> Note Club: Reloaded </Link></li>
                    <li><Link className={"nav-link"} to={"/"}> Home </Link></li>
                    {isAuthenticated && (
                    <li><Link className={"nav-link"} to={"/create"}> Create </Link></li>
                    )}
                    <li>
                        <Link className={"nav-link"} to={"/"}>
                            {!isLoading && !user && (
                                <>
                                    <button className="btn btn-dark" onClick={loginWithRedirect}>
                                        Sign In
                                    </button>
                                </>
                            )}

                            {!isLoading && user && (
                                <>
                                    <div>
                                        <button className="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin })}>
                                            Sign Out 
                                        </button>
                                    </div>
                                </>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default withRouter(Navbar);
