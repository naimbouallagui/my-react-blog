import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ArticleContext } from '../Contexts/ArticleContext';
// import UpdateArticle from './UpdateArticle';

const AllArticles = () => {

    const { stateArticle } = useContext(ArticleContext);
    const { dispatch } = useContext(ArticleContext);
    dispatch({type: 'ALL_ARTICLES'});
    const deleteArticle = (articleId) => {
        dispatch({ type: "REMOVE_ARTICLE", id: articleId })
    }
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

                {stateArticle.articles.map(e =>

                    <div className="col-md-6" key={e.id}>
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-3 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">New</strong>
                                <h3 className="mb-0">{e.title}</h3>
                                <p className="card-text mb-auto">{e.content}</p>
                                <Link to={`/blog`} className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img alt="" src={e.image} width="180px"/>
                            </div>
                        </div>

                        <Link to={'/articles/edit/'+ e.id} className="btn btn-sm btn-outline-success mx-2 my-2">Edit</Link>
                        <button onClick={() => deleteArticle(e.id)} className="btn btn-sm btn-outline-danger mx-2 my-2"> Delete</button>

                    </div>

                )}
                
            </div>
        </>
    )
}

export default AllArticles
