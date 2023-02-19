import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/src/atoms/authModalAtom";
import Login from "./Login";
import SignUp from "./SignUp";


type AuthInputProps = {}

const AuthInputs: React.FC<AuthInputProps> = () => {
    const modalState = useRecoilValue(authModalState);

    return (
        <Flex direction="column" align="cetner" width="100%" mt={4}>
            
            {modalState.view === "login" && <Login /> }
           { modalState.view ===  "signup" && <SignUp />}
        </Flex>
    )
}

export default AuthInputs;