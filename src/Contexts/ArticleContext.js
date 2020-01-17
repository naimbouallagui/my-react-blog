import React, { createContext, useReducer } from "react";
import { ArticleReducer } from "../Reducers/ArticleReducer";

export const ArticleContext = createContext();
const ArticleContextProvider = (props) => {
  
  const initialState = {articles: [], comments: []}
  if( localStorage.getItem('listArticles') ) {
    initialState.articles= JSON.parse(localStorage.getItem('listArticles'));
  } else {
    localStorage.setItem('listArticles', JSON.stringify([]))
  }
  if (localStorage.getItem('listComments')) {
    initialState.comments= JSON.parse(localStorage.getItem('listComments'));
  } else {
    localStorage.setItem('listComments', JSON.stringify([]))
  }
  
  const [stateArticle, dispatch] = useReducer(ArticleReducer, initialState);
  
  return (
      <ArticleContext.Provider value={{ stateArticle, dispatch}}>
        { props.children }
      </ArticleContext.Provider>
  )
}

export default ArticleContextProvider;