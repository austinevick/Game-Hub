import { HStack, Image } from "@chakra-ui/react"
import Logo from '../assets/logo.webp'
import { ColorModeSwitch } from "./ColorModeSwitch"
import { FaBars } from 'react-icons/fa'
export const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'}
            paddingRight={'8px'}>
            <Image src={Logo} boxSize={'60px'} />
            <HStack>
                <ColorModeSwitch />
                <FaBars onClick={() => console.log('ffffff')
                } />
            </HStack>
        </HStack>
    )
}
