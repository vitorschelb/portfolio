"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Box, useToast, Spinner, ChakraProvider } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const initState = { IsLoading: false, name: "", email: "", message: "" };

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initState);

  const t = useTranslations("Contact");

  const toast = useToast();

  const handleChange = ({ target }: InputChangeEvent) => {
    setState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    setLoading(false);

    if (response.ok) {
      setState(initState);
      toast({
        status: "success",
        duration: 2000,
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} textAlign="center" bg="rgb(140, 137, 135)">
            {t("toast")}
          </Box>
        ),
      });
    } else {
      toast({
        status: "success",
        duration: 2000,
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} textAlign="center" bg="red.400">
            {t("error")}
          </Box>
        ),
      });
    }
  }

  return (
    <ChakraProvider>
      <section className="flex flex-col justify-center items-center h-screen bg-clean-white md:px-20 2xl:px-36">
        <div className="w-1/2">
          <div className="flex items-center mb-6">
            <h1 className="tracking-super text-xl font-poppins font-bold text-gray-three">
              {t("title")}
            </h1>
            <span className="w-full border-gray-zero border-b" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <input
                  tabIndex={0}
                  aria-label="name"
                  name="name"
                  type="text"
                  id="name"
                  className="p-3 mb-3 w-full text-sm font-poppins tracking-wider bg-gray-50 border border-gray-300 shadow-sm focus:border-gray-400 focus:shadow-md transition duration-300 focus:outline-none"
                  placeholder={t("name")}
                  required
                  value={state.name}
                  onChange={handleChange}
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  tabIndex={0}
                  aria-label="Email"
                  name="email"
                  type="email"
                  id="email"
                  className="p-3 mb-3 w-full text-sm font-poppins tracking-wider bg-gray-50 border border-gray-300 shadow-sm focus:border-gray-400 focus:shadow-md transition duration-300 focus:outline-none"
                  placeholder="Email"
                  required
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                tabIndex={0}
                aria-label="Message"
                name="message"
                id="message"
                rows={6}
                className="resize-none p-3 mb-3 w-full text-sm font-poppins tracking-wider bg-gray-50 border border-gray-300 shadow-sm focus:border-gray-400 focus:shadow-md transition duration-300 focus:outline-none"
                placeholder={t("message")}
                value={state.message}
                onChange={handleChange}
              ></textarea>
              <button
                tabIndex={0}
                aria-label="Send Message"
                type="submit"
                disabled={loading}
                className="p-6 w-44 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three transition duration-500"
              >
                {loading ? <Spinner size="sm" /> : t("button")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </ChakraProvider>
  );
}
