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
import { useProjects } from "@/app/contexts/ProjectsContext";


type ProjectsModalProps = {
  index?: number;
};

export default function ProjectsModal({ index }: ProjectsModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {setCurrentIndex} = useProjects()

  const openWithMobileIndex = () => {
    setCurrentIndex(index ?? 0)
    onOpen()
   }


  return (
    <>
      <ImEye
        onClick={onOpen}
        className="text-[#CFD3D6] text-8xl group-hover:animate-float hidden lg:block"
      />

      <div className="flex justify-center items-center right-0 ls:mr-8 bg-[#CFD3D6] m-2 p-1 rounded-full lg:hidden">
        <ImEye
          onClick={openWithMobileIndex}
          className="text-4xl text-gray-three ls:text-4xl animate-pulse ease-in-out duration-1000"
        />
      </div>
      <Modal
        size="xl"
        scrollBehavior={"inside"}
        isOpen={isOpen}
        onClose={onClose}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="none">
          <ModalBody padding={0}>
            <ProjectsModalContent />
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
