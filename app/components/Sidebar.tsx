"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Code,
  FileText,
  ImageIcon,
  Mail
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sidebar_list = [
    {name: 'Home', active_key: 'home', icon: <Home size={18} />},
    {name: 'About', active_key: 'about', icon: <User size={18} />},
    {name: 'Skills', active_key: 'skills', icon: <Code size={18} />},   
    {name: 'Resume', active_key: 'resume', icon: <FileText size={18} />},
    {name: 'Portfolio', active_key: 'portfolio', icon: <ImageIcon size={18} />},
    {name: 'Contact', active_key: 'contact', icon: <Mail size={18} />},
  ]

  return (
    <aside className="sidebar">
        <div className="profile">
            <img src="/profile.png" alt="profile" />
            <h2>Joana Kelly</h2>
        </div>

        <nav>
            <ul>
                {
                  sidebar_list.map((item:any, index: number) => (
                    <li
                        key = {item.active_key + index}
                        className={active === item.active_key ? "active" : ""}
                        onClick={() => scrollToSection(item.active_key)}
                    >
                        {item.icon} {item.name}
                    </li>
                  ))
                }
            </ul>
        </nav>
    </aside>
  );
}