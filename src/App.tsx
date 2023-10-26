import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import { NavBar } from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateColumns={{
        base: '1fr', lg: '200px 1fr'
      }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,

      }}>
      <GridItem area='nav' paddingX={5}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
