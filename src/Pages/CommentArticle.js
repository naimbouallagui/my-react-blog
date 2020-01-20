import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArticleContext } from '../Contexts/ArticleContext'
import { UserContext } from '../Contexts/UserContext';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UpdateComment from './UpdateComment';

const CommentArticle = ({articleId}) => {
    const { dispatch } = useContext(ArticleContext);
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const { stateArticle } = useContext(ArticleContext);
    const { stateUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_COMMENT", comment: { title, comment, owner: stateUser.connectedUser.id,article:articleId } })

    }
    const deleteComment = (commentId) => {
        dispatch({ type: "REMOVE_COMMENT", id: commentId })
    }
    const articleComments = stateArticle.comments.filter(c => c.article === articleId)
    return (
        <>
            <div className="panel panel-default widget">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-comment"></span>
                    <h3 className="panel-title">
                        Recent Comments</h3>
                    <span className="label label-info">
                        {articleComments.length}</span>
                </div>
                {articleComments.map(e => {

                    const selectedOwner = stateUser.users.find(u => u.id === e.owner) || {}
                    return <div className="panel-body" key={e.id}>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-xs-2 col-md-1">
                                        <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" /></div>
                                    <div className="col-xs-10 col-md-11">
                                        <div>
                                            <Link to="#" />{e.title}
                                            <div className="mic-info">
                                                By: <Link to="#" />@{selectedOwner.username}
                                            </div>
                                        </div>
                                        <div className="comment-text">
                                            {e.comment}
                                        </div>
                                        {e.owner === stateUser.connectedUser.id && <div className="action">
                                            <ModalReact
                                                content={<UpdateComment i={e.id} t={e.title} c={e.comment} />}
                                                button={{ variant: "success", size: "sm", text: "", icon: <i className="fas fa-edit"></i> }}
                                                title="update comment" onOk={() => { }} onCancel={() => { }} />
                                            <button onClick={() => deleteComment(e.id)} type="button" className="btn btn-danger btn-sm  mx-2 my-2" title="Delete">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>}
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>

                }
                )}
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
                    <button className="btn btn-info btn-block my-3 font-weight-bold" type="submit">+</button>
                </form>
            </div>

        </>


    )
}

export default CommentArticle



const ModalReact = ({ content, button, title, onOk, onCancel, }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { variant, size, text, icon } = button
    return (
        <>
            <Button variant={variant} onClick={handleShow} size={size}>
                {icon}{text}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}