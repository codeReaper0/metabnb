import React, {Component} from "react";
import "../index.css";

const Contact = () => {
  return (
    <React.Fragment>
      <main className="max-w-3xl mx-auto py-16 px-4 sm:px-10 lg:px-0">
        <h1 className="text-4xl font-semibold mb-5">Contact Me</h1>
        <p className="text-xl text-gray-600 mb-12">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="w-full sm:w-1/2">
              <label
                className="text-gray-700 text-sm font-medium"
                id="first_name"
                for="first_name"
              >
                First name
              </label>
              <input
                className="w-full py-[10px] px-[14px] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#d0d5dd] text-black placeholder:text-gray-500"
                type="text"
                for="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                className="text-gray-700 text-sm font-medium"
                id="last_name"
                for="last_name"
              >
                Last name
              </label>
              <input
                className="w-full py-[10px] px-[14px] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#d0d5dd] text-black placeholder:text-gray-500"
                type="text"
                for="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              className="text-gray-700 text-sm font-medium"
              id="email"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full py-[10px] px-[14px] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#d0d5dd] text-black placeholder:text-gray-500"
              type="email"
              for="email"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="w-full">
            <label className="text-gray-700 text-sm font-medium" for="message">
              Message
            </label>
            <textarea
              className="w-full py-[10px] px-[14px] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#d0d5dd] text-black placeholder:text-gray-500 h-36"
              id="message"
              for="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>

          <div className="w-full flex items-center gap-3">
            <input
              className="w-5 h-5 rounded-md border border-gray-300 "
              type="checkbox"
              for="agree"
            />
            <label className="text-gray-700 text-sm font-medium" for="agree">
              You agree to providing your data to Tella Boluwatife who may
              contact you.
            </label>
          </div>

          <button
            className="w-full bg-[#1570ef] py-5 rounded-lg text-center font-semibold text-white"
            id="btn_submit"
          >
            Send message
          </button>
        </form>
      </main>

      <footer className="pt-8 lg:pt-12 pb-2 xl:pb-12 px-4 xl:px-0">
        <section className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center py-8 max-w-7xl mx-auto border-t border-t-gray-200">
          <img
            src="/Zuri_Logo.png"
            className="max-w-[138px] lg:max-w-[186px]"
          />
          <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
          <img src="/I4G.png" className="max-w-[99px] lg:max-w-[132px]" />
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Contact;
