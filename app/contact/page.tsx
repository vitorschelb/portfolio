"use client";
import ContactForm from "../components/ContactForm";
import { ChakraProvider } from "@chakra-ui/react";


export default function PageProjects() {
  return (
    <main>

      <ChakraProvider>
        <ContactForm />
      </ChakraProvider>

    </main>
  );
}
