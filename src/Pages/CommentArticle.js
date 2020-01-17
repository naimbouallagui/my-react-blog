import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArticleContext } from '../Contexts/ArticleContext'
import { UserContext } from '../Contexts/UserContext';

const CommentArticle = () => {
    const { dispatch } = useContext(ArticleContext);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const { stateArticle } = useContext(ArticleContext);
    const { stateUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_COMMENT", comment: { title, comment, owner: stateUser.connectedUser.id } })
       
    }
    const deleteComment = (commentId) => {
        dispatch({ type: "REMOVE_COMMENT", id: commentId })
    }
    return (
        <>
            <div className="panel panel-default widget">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-comment"></span>
                    <h3 className="panel-title">
                        Recent Comments</h3>
                    <span className="label label-info">
                        78</span>
                </div>
                {stateArticle.comments.map(e =>
                    <div className="panel-body" key={e.id}>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-xs-2 col-md-1">
                                        <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" /></div>
                                    <div className="col-xs-10 col-md-11">
                                        <div>
                                            <Link to="#" />{e.title}
                                            <div className="mic-info">
                                                By: <Link to="#" />{e.owner}
                                            </div>
                                        </div>
                                        <div className="comment-text">
                                            {e.comment}
                                        </div>
                                        <div className="action">
                                            <button type="button" className="btn btn-outline-primary btn-xs  mx-2 my-2" title="Edit">
                                                Edit<span className="glyphicon glyphicon-pencil"></span>
                                            </button>
                                            <button onClick={() => deleteComment(e.id)}type="button" className="btn btn-outline-danger btn-xs  mx-2 my-2" title="Delete">
                                                Delete<span className="glyphicon glyphicon-trash"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                )}
                <button className="btn btn-info btn-xs my-3" type="submit">More</button>
            </div>
            <div className="text-center">
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        id="inputTitle"
                        className="form-control"
                        placeholder="title"
                        required=""
                        autoFocus=""
                    />
                    <textarea
                        onChange={e => setComment(e.target.value)}
                        className="form-control mt-2"
                        rows="5"
                        id="inputContent"
                        placeholder="comment"
                        defaultValue={comment} />
                    <button className="btn btn-info btn-block my-3" type="submit">Add</button>
                </form>
            </div>

        </>


    )
}

export default CommentArticle
