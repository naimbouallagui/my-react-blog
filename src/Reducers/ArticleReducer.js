import uuid from 'uuid/v1';

export const ArticleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            const newArticlesState = {
                ...state, articles: [
                    ...state.articles, {
                        title: action.article.title,
                        content: action.article.content,
                        image: action.article.image,
                        owner: action.article.owner,
                        id: uuid()
                    }
                ]
            }

            localStorage.setItem('listArticles', JSON.stringify(newArticlesState.articles))
            return newArticlesState;
        case 'REMOVE_ARTICLE':
            // const index = state.articles.map((e) => { return e.id; }).indexOf(action.id);
            // const allArticles = [...state.articles]
            // allArticles.splice(index, 1);
            const allArticles = state.articles.filter(e => e.id !== action.id)
            localStorage.setItem('listArticles', JSON.stringify(allArticles));
            return { ...state, articles: allArticles };
        case 'UPDATE_ARTICLE':
            const articles = JSON.parse(localStorage.getItem('listArticles'));
            const index = articles.map(a => { return a.id }).indexOf(action.article.id);
            articles[index] = action.article;
            localStorage.setItem('listArticles', JSON.stringify(articles));
            return { ...state, articles };

        case 'ALL_ARTICLES':
            state.articles = JSON.parse(localStorage.getItem('listArticles'));
            return state
        case 'ADD_COMMENT':
            const newCommentState = {
                ...state, comments: [
                    ...state.comments, {
                        title: action.comment.title,
                        comment: action.comment.comment,
                        owner: action.comment.owner,
                        id: uuid()
                    }
                ]
            }

            localStorage.setItem('listComments', JSON.stringify(newCommentState.comments))
            return newCommentState;
            case 'REMOVE_COMMENT':
            // const index = state.comments.map((e) => { return e.id; }).indexOf(action.id);
            // const allComments = [...state.comments]
            // allComments.splice(index, 1);
            const allComments = state.comments.filter(e => e.id !== action.id)
            localStorage.setItem('listComments', JSON.stringify(allComments));
            return { ...state, comments: allComments };
        default:
            return state
    }
}