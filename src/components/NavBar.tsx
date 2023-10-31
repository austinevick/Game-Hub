import { HStack, Image } from "@chakra-ui/react"
import Logo from '../assets/logo.webp'
import { ColorModeSwitch } from "./ColorModeSwitch"
import { SearchInput } from "./SearchInput"


interface Props {
    onSearch: (value: string) => void
}
export const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent={'space-between'}
            paddingRight={'8px'}>
            <Image src={Logo} boxSize={'60px'} />
            <SearchInput onSearch={onSearch} />
            <HStack>
                <ColorModeSwitch />

            </HStack>
        </HStack>
    )
}
