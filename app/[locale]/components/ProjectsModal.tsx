"use client";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectsModalContent from "./ProjectsModalContent";
import { ImEye } from "react-icons/im";
import { AddIcon } from "@chakra-ui/icons";
import { useProjects } from "@/app/contexts/ProjectsContext";

type ProjectsModalProps = {
  projectIndex?: number;
};

export default function ProjectsModal({projectIndex}: ProjectsModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setCurrentIndex, currentIndex} = useProjects();

  const openModalWithIndex = () => {
    setCurrentIndex((projectIndex ?? currentIndex));
    onOpen();
  };

  return (
    <>
      <ImEye
        onClick={onOpen}
        className="text-[#CFD3D6] text-8xl group-hover:animate-float hidden lg:block"
      />
      <div className="absolute bottom-0 right-0 bg-[#CFD3D6] m-2 p-1 rounded-full lg:hidden">
        <AddIcon onClick={() => openModalWithIndex()} className="text-2xl text-gray-three animate-pulse ease-in-out duration-1000" />
      </div>
      <Modal
        size="xl"
        scrollBehavior={"inside"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="none"
        >
          <ModalBody padding={0}>
            <ProjectsModalContent  />
          </ModalBody>
          <ModalCloseButton
            boxShadow={"sm"}
            bgColor="blackAlpha.800"
            textColor={"white"}
            borderRadius="none"
            padding={0}
            margin={0}
          />
        </ModalContent>
      </Modal>
    </>
  );
}
