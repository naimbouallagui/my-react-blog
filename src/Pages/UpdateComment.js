import React, { useContext, useState } from 'react';
import { ArticleContext } from '../Contexts/ArticleContext';
import { useParams } from 'react-router-dom';


const UpdateComment = ({t,c,i}) => {
    const {id} = useParams();
    const [title, setTitle] = useState(t||"");
    const [comment, setComment] = useState(c||"");
    const {dispatch}=useContext(ArticleContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_COMMENT", comment: { id:i, title, comment, article:id} });
        
    };
    return (
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
                        value={title}
                    />
                    <textarea
                        onChange={e => setComment(e.target.value)}
                        className="form-control mt-2"
                        rows="5"
                        id="inputContent"
                        placeholder="comment"
                        defaultValue={comment} />
                    <button className="btn btn-info btn-block my-3" type="submit">Update</button>
                </form>
        </div>
    )
}

export default UpdateComment
