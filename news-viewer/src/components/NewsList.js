/* import styled from 'styled-components'
import NewsItem from './NewsItem'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const sampleArticle = {
    title: 'Title',
    description: 'Description',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = () => {
    return (
        <NewsListBlock>
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
        </NewsListBlock>
    )
}
export default NewsList; */

///////////////////

/* import {useState, useEffect} from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        const fetchData = async() => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b713e5b9826f4f049a27d2ffac3a7248`,
                )
            setArticles(response.data.articles)
            } catch(e) {
                console.log(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [category]) // category값이 바뀔때마다 뉴스를 새로 불러옴.

    if (loading) {
        return <NewsListBlock>wait...</NewsListBlock>
    }
    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}
export default NewsList; */


//////////////////


import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const NewsList = ({category}) => {
   const [loading, response, error] = usePromise(()=> {
    const query = category === 'all' ? '' : `&category=${category}`
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b713e5b9826f4f049a27d2ffac3a7248`,
    )
   }, [category])

   if (loading) {
    return <NewsListBlock>Waiting...</NewsListBlock>
   }
   if(!response) {
    return null;
   }
   if(error) {
    return <NewsListBlock>Error occured</NewsListBlock>
   }
   const {articles} = response.data;
   
   return (
    <NewsListBlock>
        {articles.map(article => (
            <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
   )
}
export default NewsList;