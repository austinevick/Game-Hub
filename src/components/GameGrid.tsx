import { SimpleGrid } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import { GameCard } from './GameCard'
import { GameCardSkeleton } from './GameCardSkeleton'
import { Genre } from '../hooks/useGenres'
import { PlatformList } from '../hooks/usePlatforms'

interface Props {
    selectedGenre: Genre | null
    selectedPlatform: PlatformList | null
}
export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { games, isLoading } = useGames(selectedGenre, selectedPlatform)
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <SimpleGrid columns={{
            sm: 1, md: 2, lg: 3, xl: 5
        }} padding={'10px'} spacing={4}>
            {isLoading && skeletons.map((e) => (<GameCardSkeleton key={e} />))}
            {games.map((game) => <GameCard key={game.id} game={game} />)}
        </SimpleGrid>
    )
}
