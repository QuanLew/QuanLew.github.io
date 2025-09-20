import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import emailjs from "@emailjs/browser";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false); // Fixed typo: setIsLoaing -> setIsLoading
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    try {
      // Send the main email to you
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          // to_name: "Minh Quan Le",
          email: form.email,
          // to_email: "miquanle1006@gmail.com",
          reply_to: form.email, // This will auto-reply to user
          message: form.message,
          // user_name: form.name, // For personalized auto-reply
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setIsLoading(false);
      showAlert({
        show: true,
        text: "Message sent successfully! Check your email for confirmation.",
        type: "success",
      });
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      setCurrentAnimation("idle");
      console.log(error);
      showAlert({
        show: true,
        text: "Something went wrong. Please try again.",
        type: "danger",
      });
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              className="input"
              type="text"
              name="name"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              className="input"
              type="email"
              name="email"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.699, -0.69, 0]}
              scale={[0.45, 0.45, 0.45]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
