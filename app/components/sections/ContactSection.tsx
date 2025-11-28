"use client";

import React from "react";
import { Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <p className="text-xl text-text-secondary mb-12 text-center">
        Have a question or want to work together?
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface p-8 md:p-10">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

          <form className="relative space-y-6" onSubmit={handleSubmit}>
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
