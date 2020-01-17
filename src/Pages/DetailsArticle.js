import React, { useContext } from 'react'
import { ArticleContext } from '../Contexts/ArticleContext'
import { useParams, useHistory } from 'react-router-dom';

const DetailsArticle = () => {
    const { stateArticle } = useContext(ArticleContext);
    const history = useHistory();
    let { id } = useParams();

    const article = stateArticle.articles.find(item => item.id === id)
    return (
        <div className="jumbotron">
            <h1>{article.title}</h1>
            <img src={article.image} alt="" width="200" />
            <div className="lead" dangerouslySetInnerHTML={{
                __html:
                    article.content
            }} />
            <button className="btn btn-sm  btn-outline-secondary mx-2 my-2" onClick={() => history.goBack()}>Back To List</button>
        </div>
    )
}

export default DetailsArticle
