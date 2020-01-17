import React, { useContext, useState } from 'react';
import { ArticleContext } from '../Contexts/ArticleContext';
import { UserContext } from '../Contexts/UserContext';
import { useParams, useHistory } from 'react-router-dom';
import Editor from '../Components/editor';


const UpdateArticle = () => {
    let { id } = useParams();
    const { stateArticle, dispatch } = useContext(ArticleContext)
    let history = useHistory();

    const selectedArticle = stateArticle.articles.find(b => b.id === id);

    const [title, setTitle] = useState((selectedArticle || {}).title);
    const [content, setContent] = useState((selectedArticle || {}).content);
    const [image, setImage] = useState((selectedArticle || {}).image);
    const { stateUser } = useContext(UserContext)

    if (!selectedArticle) {
        history.push("/blog");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_ARTICLE", article: { id, title, content, image, owner: stateUser.connectedUser.id } });
        history.push("/blog");

    };
    const handleUpload = (event) => {

        let reader = new FileReader();
        //1
        reader.readAsDataURL(event.target.files[0]);
        //2
        reader.onloadend = function () {
            // var b64 = reader.result.replace(/^data:.+;base64,/, '');
            var b64 = reader.result;
            setImage(b64)
        };

    }

    return (
        <div className="text-center">
            <form className="form-signin" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Update Article</h1>
                <label className="float-left my-3">Title</label>
                <label htmlFor="inputTitle" className="sr-only">Title</label>
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    id="inputTitle"
                    className="form-control"
                    placeholder="title"
                    required=""
                    autoFocus=""
                />
                <label className="float-left my-3">Content</label>

                <label htmlFor="inputContent" className="sr-only">Content</label>
                {/* <textarea
                    onChange={e => setContent(e.target.value)}
                    className="form-control"
                    rows="5"
                    id="inputContent"
                    defaultValue={content} />
                    <img src={image} alt="..." /> */}
                    <Editor handleChange={(d) => setContent(d)} data={content}/>
                <input
                    type="file"
                    id="imageFile"
                    name='imageFile'
                    multiple={false}
                    onChange={(files) => handleUpload(files)}
                />
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateArticle
