"use client";

import React from "react";
import { Mail } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export const ContactSection: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 4000,
          position: "top-center",
        });
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.", {
          duration: 4000,
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <section id="contact" className="mt-24">
      <Toaster />
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <p className="text-xl text-text-secondary mb-12 text-center">
        Have a question or want to work together?
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-8 md:p-10">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

          <form className="relative space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-text-secondary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-bg-surface border border-border rounded-lg focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 text-text-primary placeholder-text-secondary"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-bg-surface border border-border rounded-lg focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 text-text-primary placeholder-text-secondary"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-bg-surface border border-border rounded-lg focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 text-text-primary placeholder-text-secondary resize-none"
                placeholder=""
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-bg-surface hover:bg-bg-muted border border-border hover:border-accent-green/50 text-text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
