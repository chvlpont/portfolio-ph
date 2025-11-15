import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    // Make first section visible immediately
    const firstSection = document.querySelector("section");
    if (firstSection) {
      firstSection.classList.add("visible");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all sections except the first one
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      if (index > 0) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};
