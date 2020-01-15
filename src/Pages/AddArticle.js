import React, { useContext, useState } from 'react';
import { ArticleContext } from '../Contexts/ArticleContext';
const AddArticle = () => {
    const { dispatch } = useContext(ArticleContext)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ARTICLE", article: { title, content } })

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
                <textarea
                    onChange={e => setContent(e.target.value)}
                    class="form-control"
                    rows="5"
                    id="inputContent">
                    Content
                    </textarea>
                <input
                    type="file"
                    id="imageFile"
                    name='imageFile'
                    // onChange={this.imageUpload} 
                    />
                {/* <input onChange={e => setContent(e.target.value)} type="text" id="inputContent" className="form-control" placeholder="Content" required="" /> */}
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddArticle
