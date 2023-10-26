import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { PlatformList, usePlatform } from '../hooks/usePlatforms'


interface Props {
    onSelectedPlatform: (platform: PlatformList) => void
    selectedPlatform: PlatformList | null
}

export const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const { platforms } = usePlatform()
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {platforms?.results.map((p) => (
                    <MenuItem onClick={() => onSelectedPlatform(p)}
                        key={p.id}>{p.name}</MenuItem>

                ))}

            </MenuList>
        </Menu>
    )
}
