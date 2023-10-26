import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

export const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton borderRadius={10} height={'200px'} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}


export const GameListSkeleton = () => {
    return (
        <Card>
            <Skeleton borderRadius={10} height={'50px'}
                marginBottom='10px' />

            <SkeletonText />

        </Card>
    )
}
