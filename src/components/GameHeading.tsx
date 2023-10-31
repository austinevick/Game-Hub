import { Heading } from "@chakra-ui/react"

type GameHeadingProps = {
    platform: string | undefined
    genre: string | undefined
}
export const GameHeading = ({ platform, genre }: GameHeadingProps) => {
    const heading = `${platform || ''} ${genre || ''} Games`
    return (
        <Heading as={'h1'} paddingY={5} paddingStart={2}>
            {heading}
        </Heading>
    )
}
