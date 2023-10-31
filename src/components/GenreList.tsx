import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react"
import { Genre, useGenres } from "../hooks/useGenres"
import { GameListSkeleton } from "./GameCardSkeleton"

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { genres, isLoading } = useGenres()
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <Heading marginY='20px'>Genres</Heading>
            <List>
                {isLoading && skeletons.map((e) => (<GameListSkeleton key={e} />))}

                {genres.map((genre) => (<ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Image objectFit={'cover'} borderRadius={8} boxSize={'52px'} src={genre.image_background} />
                        <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'black' : 'normal'} onClick={() => onSelectGenre(genre)
                        } variant={'link'} fontSize={'lg'}>{genre.name}</Button>
                    </HStack>
                </ListItem>))}
            </List>
        </>
    )
}
