import uuid from 'uuid/v1';

export const ArticleReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
            const newArticlesState =  {...state, articles: [
                ...state.articles, {
                    title: action.article.title,
                    content: action.article.content,
                    image: action.article.image,
                    owner: action.article.owner,
                    id: uuid()
                }
            ]} 
            
            localStorage.setItem('listeArticles', JSON.stringify(newArticlesState.articles))
            return newArticlesState;
        case 'REMOVE_ARTICLE':
            // const index = state.articles.map((e) => { return e.id; }).indexOf(action.id);
            // const allArticles = [...state.articles]
            // allArticles.splice(index, 1);
            const allArticles = state.articles.filter(e=> e.id !== action.id)
            return {...state, articles: allArticles};
        case 'UPDATE_ARTICLE':
          return state.map(a => {
              if( a.id === action.payload.id) {
                 a = action.payload;
              }
              return a;
          });
          case 'ALL_ARTICLES':
          state = JSON.parse(localStorage.getItem('listArticles'));
            return [...state]
        default:
            return state
    }
}