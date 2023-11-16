import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()

export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const articlesUrl = 'https://win23-assignment.azurewebsites.net/api/articles'
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticles()
    },[])

    const getArticles = async () => {
        const result = await fetch(articlesUrl)
        setArticles(await result.json())
    }

    const getArticle = async (id) => {
        const result = await fetch(`${articlesUrl}/${id}`)
        setArticle(await result.json())
    }
    
    const clearArticle = () => {
        setArticle({})
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticles, getArticle, clearArticle, }}>
            {children}
        </ArticleContext.Provider>
    )
}
