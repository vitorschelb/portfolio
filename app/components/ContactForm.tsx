"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Box, useToast } from "@chakra-ui/react";

const initState = { IsLoading: false, name: "", email: "", message: "" };

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initState);

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
      console.log("Message sent");
      setState(initState);
      toast({
        status: "success",
        duration: 2000,
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} textAlign="center" bg="rgb(140, 137, 135)">
            Message sent
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
            {"Message not sent :("}
          </Box>
        ),
      });
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label
                htmlFor="name"
                id="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
                value={state.name}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
                value={state.email}
                onChange={handleChange}
              />
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              value={state.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="py-3 disabled:bg-gray-400 disabled:text-gray-100 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-slate-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
