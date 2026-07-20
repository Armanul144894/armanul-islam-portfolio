"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, as: Tag = "div", className = "", style }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`${inView ? "in" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
