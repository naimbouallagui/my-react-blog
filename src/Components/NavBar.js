import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

const NavBar = () => {

    const { stateUser, dispatch } = useContext(UserContext);

    const logoutSubmit = () => {
        dispatch({type: "LOGOUT"})

    }
    if(!stateUser.connectedUser) return null;
    return (
        <>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 text-center">
                        <Link to={`/blog`} className="btn btn-sm btn-outline-secondary">Subscribe</Link>

                    </div>
                    <div className="col-4 text-center">
                        <Link to={`/blog`} className="blog-header-logo text-dark">Blog</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link to={`/login`} className="btn btn-sm btn-outline-secondary" onClick={() => logoutSubmit()}>Log out</Link>
                    </div>
                </div>
            </header>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link to={`/blog`} className="p-2 text-muted">All Articles</Link>
                    <Link to={`/blog`} className="p-2 text-muted">My Article</Link>
                    <Link to={`/articles/add`} className="p-2 text-muted">Add Article</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 1</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 2</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 3</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 4</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 5</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 6</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 7</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 8</Link>
                    <Link to={`/blog`} className="p-2 text-muted">Category 9</Link>
                </nav>
            </div>
        </>
    )
}

export default NavBar
