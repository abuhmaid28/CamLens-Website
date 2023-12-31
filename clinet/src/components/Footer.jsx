import React, { useState } from "react";
import { socialMediaLinks } from "./SocialMediaLinks"; // Import the socialMediaLinks array

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="pt-16 px-5 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="sm:h2 text-2xl uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70 text-sm md:text-base ">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
        </div>
        {/* Newsletter form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // Handle form submission here, e.g., send the email to your server
            // ...

            // Clear the input field after submission
            setEmail("");
          }}
          className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-10"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        {/* Links */}
        <div className="text-white/60 flex flex-col sm:flex-row text-center gap-x-6 capitalize max-w-max mx-auto mb-9 flex-wrap">
          <a href="#" className="hover:text-white transition-all">
            Returns policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track your order
          </a>
          <a href="#" className="hover:text-white transition-all">
            Shipping & delivery
          </a>
        </div>
        {/* Social icons */}
        <div className="flex mx-auto gap-x-6 max-w-max text-xl mb-16">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-accent hover:scale-125 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Copyright */}
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; CamLens 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
