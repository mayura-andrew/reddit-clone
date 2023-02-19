import { Icon, MenuItem, Flex } from "@chakra-ui/react";
import React, { useState} from "react";
import CreateCommunityModal from "../../Modal/CreateCommunityModal/CreateCommunityModal";
import { GrAdd } from "react-icons/gr";

type CommunitesProps = {};

const Communites: React.FC<CommunitesProps> = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
        <MenuItem 
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100"}}
        onClick={() => setOpen(true)} >

        <Flex align="center">
            <Icon fontSize={20} mr={2} as={GrAdd} />
            Create Community
        </Flex>
        
    </MenuItem>
    </>
    )
};

export default Communites;


