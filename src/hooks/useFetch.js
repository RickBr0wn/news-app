import React from 'react'

const useFetch = (url, options) => {
  const isMounted = React.useRef(true)
  const [response, setResponse] = React.useState({})
  const [error, setError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (isMounted.current) {
      setIsLoading(true)
      const fetchData = async function() {
        await fetch(url, options)
          .then(res => res.json())
          .then(jsonData => {
            setIsLoading(false)
            setResponse({
              'end-point': url,
              status: 200,
              error: false,
              'data-type': Array.isArray(jsonData) ? 'array' : typeof jsonData,
              'data-length': jsonData.length,
              data: jsonData,
            })
          })
          .catch(err => {
            console.error(err)
            setIsLoading(false)
            setError(err)
          })
      }
      fetchData()
    }

    return () => {
      isMounted.current = false
    }
  }, [url, options])

  return [response, error, isLoading]
}

export { useFetch }
