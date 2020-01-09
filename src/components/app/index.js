import React from 'react'
import { useFetch } from '../../hooks'

const styles = {
  item: {
    border: '1px solid red',
    padding: '0 20px',
    position: 'relative',
  },
  info: {
    position: 'absolute',
    top: 0,
    background: 'orange',
    width: '400px',
    overflow: 'hidden',
  },
  image: {
    width: '400px',
    position: 'relative',
    'background-repeat': 'no-repeat',
  },
}

export default function() {
  const [response, error, isLoading] = useFetch(
    `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}`
  )

  if (isLoading) {
    return <h1>Loading..</h1>
  }

  if (error) {
    console.log('oops!', error.message)
  }

  if (response.data) {
    console.log(response.data.articles)
    const articles = response.data.articles
    return (
      <>
        <h1>NEWS</h1>
        {articles.map(article => (
          <div key={article.url} style={styles.item}>
            <img
              src={article.urlToImage}
              alt={article.title}
              style={styles.image}
            />
            <div style={styles.info}>
              <p>{article.author}</p>
              <p>{article.content}</p>
              <p>{article.description || 'empty!!!'}</p>
              <p>{article.publishedAt}</p>
              <p>{article.source.name}</p>
              <p>{article.title}</p>
              <p>{article.url}</p>
              <p>{article.urlToImage}</p>
            </div>
          </div>
        ))}
      </>
    )
  }

  return null
}
