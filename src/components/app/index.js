import React from 'react'
import { useFetch } from '../../hooks'

const styles = {
  info: {
    position: 'absolute',
    top: 0,
    background: 'orange',
    width: '400px',
    overflow: 'hidden',
    fontSize: 12,
    display: 'none',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    // gridTemplateRows: 'repeat(auto, 400px)',
  },
  item: {
    position: 'relative',
  },
}

export function Grid({ children }) {
  return <div style={styles.grid}>{children}</div>
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
      <Grid>
        {articles.map(article => {
          if (!article.urlToImage) {
            return null
          }
          return (
            <div key={article.url} style={styles.item}>
              <div style={styles.info}>
                <p>{article.content}</p>
                <div>{article.source.name}</div>
                <div>{article.author}</div>
                <div>{article.title}</div>
                <div>{article.description || null}</div>
                <div>{article.publishedAt}</div>
                <div>{article.url}</div>
                <div>{article.urlToImage}</div>
              </div>
              <img
                src={article.urlToImage}
                alt={article.title}
                style={styles.image}
              />
            </div>
          )
        })}
      </Grid>
    )
  }

  return null
}
