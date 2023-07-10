"use client";
import ContactForm from "../components/ContactForm";
import { ChakraProvider } from "@chakra-ui/react";
import { PageTransition } from "../components/PageTransition";

export default function PageProjects() {
  return (
    <main>
      <PageTransition>
        <ChakraProvider>
          <ContactForm />
        </ChakraProvider>
      </PageTransition>
    </main>
  );
}
