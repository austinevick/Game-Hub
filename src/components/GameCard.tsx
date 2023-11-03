import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import { PlatformIconList } from "./PlatformIconList"
import { CriticScore } from "./CriticScore"
import { Emoji } from "./Emoji"

interface Props {
    game: Game
}

export const GameCard = ({ game }: Props) => {

    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={game.background_image} />
            <CardBody height={'20px'}>
                <Heading fontSize={'16px'}>{game.name}<Emoji rating={game.rating_top} /> </Heading>
                <HStack justifyContent={'space-between'}>

                    <PlatformIconList platforms={game.parent_platforms.map((e) => e.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}
