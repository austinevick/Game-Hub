import { SimpleGrid } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import { GameCard } from './GameCard'
import { GameCardSkeleton } from './GameCardSkeleton'
import { Genre } from '../hooks/useGenres'

interface Props {
    selectedGenre: Genre | null
}
export const GameGrid = ({ selectedGenre }: Props) => {
    const { games, isLoading } = useGames(selectedGenre)
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
