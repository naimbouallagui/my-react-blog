import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ArticleContext } from '../Contexts/ArticleContext';

const AllArticles = () => {
    
    const {stateArticle} = useContext(ArticleContext);
    
    return (
        <>
                <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">Latest Article</h1>
                        <p className="lead my-3">just a few words for a post .</p>
                        <p className="lead mb-0"><Link to={`/blog`} className="text-white font-weight-bold">Continue reading...</Link></p>
                    </div>
                </div>

                <div className="row mb-2">

                    { stateArticle.articles.map(e=>
                    
                    <div className="col-md-6" key={e.id}>
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">New</strong>
                                <h3 className="mb-0">{e.title}</h3>
                                <p className="card-text mb-auto">{e.content}</p>
                                <Link to={`/blog`} className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                        </div>
                    </div>
                    )}
                    {/* <div className="col-md-6">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <Link to={`/blog`} className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                        </div>
                    </div> */}
                </div>
        </>
    )
}

export default AllArticles
