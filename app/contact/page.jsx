"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { contactSchema } from "@/lib/yup/contactSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+383) 045 414 328",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "blendiivanja2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Pristina, Kosovo",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await emailjs.sendForm(
        "service_3dr9pgc",
        "template_4458xh6",
        "#contact-form",
        "x-KSu0RhAnQbn_h7D"
      );
      toast.success("Message successfully sent!");
      resetForm();
    } catch (error) {
      toast.error("Error sending message.");
      console.error("Error sending email:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[65%] order-2 xl:order-none">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                }}
                validationSchema={contactSchema}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, isSubmitting, errors }) => (
                  <Form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 p-4 md:p-10 bg-[#27272c] rounded-xl"
                  >
                    <h3 className="text-4xl text-accent">
                      Let's work together
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quos voluptates vitae eaque non velit laborum
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          as={Input}
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="mt-1 text-red-500 text-sm"
                        />
                      </div>

                      <div className="flex flex-col">
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          as={Input}
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="mt-1 text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        as={Input}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-1 text-red-500 text-sm"
                      />
                    </div>

                    <Field
                      as={Textarea}
                      className="h-[200px]"
                      name="message"
                      placeholder="Your Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-red-500 text-sm"
                    />

                    <Button
                      size="md"
                      className="w-full md:max-w-40"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
