import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import { NavBar } from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { PlatformSelector } from './components/PlatformSelector'
import { PlatformList } from './hooks/usePlatforms'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformList | null>(null)

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
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
