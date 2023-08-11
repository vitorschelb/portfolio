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
import { useTranslations } from "next-intl";


type ProjectsModalProps = {
  index?: number;
};

export default function ProjectsModal({ index }: ProjectsModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {setCurrentIndex} = useProjects()
  const t = useTranslations("ProjectsCard");

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

        <button
          onClick={openWithMobileIndex}
          className="font-raleway mt-2 font-semibold w-full text-clean-white flex justify-center bg-gray-three p-2 shadow-md lg:hidden">
            {t("Common.detailsButton")}
        </button>
  
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
