import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import './App.css'
import { NavBar } from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { PlatformSelector } from './components/PlatformSelector'
import { PlatformList } from './hooks/usePlatforms'
import { SortSelector } from './components/SortSelector'
import { GameHeading } from './components/GameHeading'


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformList | null>(null)
  const [sortOrder, setSortOrder] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')
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
        <NavBar onSearch={(value) => setSearchValue(value)} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <GameHeading platform={selectedPlatform?.name} genre={selectedGenre?.name} />

        <HStack paddingLeft={2} marginBottom={3}>

          <PlatformSelector selectedPlatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
          <SortSelector sortOrder={sortOrder} onSelectSortOrder={(e) => setSortOrder(e)} />
        </HStack>
        <GameGrid searchValue={searchValue} sortOrder={sortOrder} selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
