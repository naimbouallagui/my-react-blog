import React, { useContext, useState } from 'react';
import { ArticleContext } from '../Contexts/ArticleContext';
import { UserContext } from '../Contexts/UserContext';
import Editor from '../Components/editor';


const AddArticle = () => {
    const { dispatch } = useContext(ArticleContext)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const { stateUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ARTICLE", article: { title, content, image, owner: stateUser.connectedUser.id } })

    }
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
                <h1 className="h3 mb-3 font-weight-normal">Add Article</h1>
                <label className="float-left my-3">Title</label>
                <label htmlFor="inputTitle" className="sr-only">Title</label>
                <input
                    onChange={e => setTitle(e.target.value)}
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
                    defaultValue={content} /> */}
                    <Editor handleChange={(d) => setContent(d)} data={content}/>

                <input
                    type="file"
                    id="imageFile"
                    name='imageFile'
                    multiple={false}
                    onChange={(files) => handleUpload(files)}
                />
                {/* <input onChange={e => setContent(e.target.value)} type="text" id="inputContent" className="form-control" placeholder="Content" required="" /> */}
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddArticle
