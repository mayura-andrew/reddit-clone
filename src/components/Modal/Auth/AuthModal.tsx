import { authModalState, ModalView } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import { Button, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import AuthInputs from "./Authinput";
import OAuthButtons from "./OAuthButton";
import ResetPassword from "./ResetPassword";



const AuthModal: React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, loading, error] = useAuthState(auth);

    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false,
        }));
    };

    useEffect(() => {
      if(user) handleClose();
    }, [user]);

    return <>

      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" >
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}>
            <Flex 
            direction="column"
            align="center"
            justify="center"
            width="70%"
            >
              <Flex direction="column" align="center" justify="center" width="70%">
                {modalState.view === 'login' || modalState.view === "signup" ? (
                  <>
                <OAuthButtons />
                <Text color="gray.500" fontWeight={700}>
                  OR
                </Text>
                <AuthInputs />
                  </>
                ): (
                  
                  <ResetPassword toggleView={function (view: ModalView): void {
                      throw new Error("Function not implemented.");
                    } } />
                
                )}

              </Flex>
            </Flex>
           
          </ModalBody>

          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
}

export default AuthModal;