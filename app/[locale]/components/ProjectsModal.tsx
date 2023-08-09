"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectsModalContent from "./ProjectsModalContent";
import { ImEye } from "react-icons/im";

export default function ProjectsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ImEye onClick={onOpen} className="text-[#CFD3D6] text-8xl group-hover:animate-float" />
      <Modal
        size="xl"
        scrollBehavior={"inside"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="none">
          <ModalBody padding={0}>
            <ProjectsModalContent />
          </ModalBody>
   
            <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
