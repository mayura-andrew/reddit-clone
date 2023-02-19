import React from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {

  Flex,
Icon,
  Menu,
  Text,
  MenuButton,
  MenuList,

} from "@chakra-ui/react";

import {TiHome} from "react-icons/ti"
import Communites from "./Communities";

const UserMenu: React.FC = () => {
  return (
    <Menu>
        <MenuButton
        cursor="pointer"
        padding="8px 6px"
        borderRadius={4}
        _hover={{outline: "1px solid", 
        outlineColor: "gray.200"}}>
        
                <Flex align="center" justify="space-between"
                width={{base: "auto", lg: "200px"}}>
                    <Flex align="center">
                        <Icon fontSize={24} mr={{ base: 1, md: 2}} as={TiHome} />
                        <Flex display={{base: "none", lg: "flex"}}>
                            <Text fontWeight={600}>Home</Text>
                        </Flex>
                    </Flex>
                    <ChevronDownIcon />
                </Flex>
        </MenuButton>
        <MenuList>
        <Communites />
        </MenuList>



    </Menu>
  )
 
}

export default UserMenu;
            
            

