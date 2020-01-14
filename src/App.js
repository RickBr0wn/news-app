import React from 'react'
import NewsContainer from './components/app'

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridTemplateRows: 'repeat(auto, 400px)',
    margin: '8px',
    gridGap: '8px',
  },
  image: {
    width: '33vw',
    height: '400px',
  },
}

export function Grid({ children }) {
  return <div style={styles.grid}>{children}</div>
}

export function Image({ src }) {
  return <img src={src} alt="skyline" style={styles.image} />
}

export default function App() {
  return (
    <>
      {/* <Grid>
        <Image src={'https://source.unsplash.com/random'} />
        <Image src={'https://source.unsplash.com/random'} />
        <Image src={'https://source.unsplash.com/random'} />
        <Image src={'https://source.unsplash.com/random'} />
        <Image src={'https://source.unsplash.com/random'} />
        <Image src={'https://source.unsplash.com/random'} />
      </Grid> */}
      <NewsContainer />
    </>
  )
}
