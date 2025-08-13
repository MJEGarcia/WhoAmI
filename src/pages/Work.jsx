import { useState } from "react";
import Carousel from "../components/carousel.jsx";

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Spaceport",
      description: "A business website for Spaceport from Gallium31",
      tech: ["HTML5", "Wordpress", "PHP", "Figma"],
      link: "https://spaceport.ph/",
      image: "media/images/spaceportThumbnail.webp"
    },
    {
      title: "AGES: Automated Gate Entry System",
      description: "Smart gate model using RFID, ESP32, and Firebase with real-time web monitoring.",
      tech: ["HTML5", "Firebase", "Figma"],
      link: null,
      image: "media/images/agesThumbnail.webp",
      gallery: [
        { type: "image", src: "media/images/agesModal1.webp" },
        { type: "video", src: "media/videos/agesVideo1.mov" },
      ],
      details:
        "A scale model smart gate solution for Hillcrest Village, built with RFID technology, ESP32 microcontroller, and DC motors to automate access. Tracks vehicles, residents, and visitors with data stored in Firebase, and includes a built-in HTML5 web dashboard for real-time monitoring."
    },
    {
      title: "RFG Goods and Trading",
      description: "Online ordering platform with streamlined ordering and management features.",
      tech: ["HTML5", "Laravel", "Tailwind", "MySQL", "Figma"],
      link: null,
      image: "media/images/rfgImage1.webp",
      gallery: [
        { type: "image", src: "media/images/rfgImage1.webp" },
        { type: "image", src: "media/images/rfgImage2.webp" },
        { type: "image", src: "media/images/rfgImage3.webp" }
      ],
      details:
        "A web-based ordering system for RFG Goods built with Laravel, Tailwind CSS, and MySQL. Designed to streamline orders, enhance user experience, and provide efficient order management for the business."
    },
    {
      title: "MERN Employee Management System",
      description: "Dynamic MERN-based employee management tool with CRUD for a technical exam.",
      tech: ["React", "MongoDB", "NodeJS", "Express", "Docker", "Postman"],
      link: null,
      image: "media/images/mernImage2.webp",
      gallery: [
        { type: "image", src: "media/images/mernImage1.webp" },
        { type: "image", src: "media/images/mernImage2.webp" }
      ],
      details:
        " Developed a dynamic employee management system using the MERN stack for a technical exam. Included dynamic model creation with auto CRUD, audit logging, soft deletion, data validation, and JWT based authentication. Tested APIs with Postman and packaged the system using Docker for use on a Linux VM (Workstation 14)."
    },
    {
      title: "Arduino Uno Sewage Flood Alarm with SMS Alerts",
      description: "Developed an Arduino Uno-based sewage flood alarm that monitors water levels in real time and sends SMS alerts at critical thresholds",
      tech: ["Arduino"],
      link: null,
      image: "media/images/ardImage2.webp",
      gallery: [
        { type: "image", src: "media/images/ardImage1.webp" },
        { type: "image", src: "media/images/ardImage2.webp" },
        { type: "image", src: "media/images/ardImage3.webp" }
      ],
      details:
        "Developed an Arduino Uno-based sewage flood alarm system capable of detecting rising water levels. Programmed the system to send SMS alerts upon reaching critical thresholds and to monitor real-time water depth. Selected, along with a few batchmates, to present at the IoT Conference 2023 as part of a university showcase."
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-[var(--bg)] text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Work</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--card)] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-[var(--accent)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-[var(--accent)] text-[var(--bold)] text-sm px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[var(--accent)] text-[var(--bold)] rounded-xl hover:bg-[var(--primary)] transition duration-300">
                    View Project
                  </a>
                  ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-block px-4 py-2 bg-[var(--accent)] text-[var(--bold)] rounded-xl hover:bg-[var(--primary)] transition duration-300">
                    View More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-[var(--backdrop)] max-w-6xl w-full rounded-xl shadow-lg overflow-auto max-h-[90vh]">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-[var(--accent)]">
          {selectedProject.title}
        </h2>
        <p className="mb-4 text-[var(--accent)]">{selectedProject.details}</p>

        {selectedProject.gallery && selectedProject.gallery.length > 0 && (
          <Carousel images={selectedProject.gallery} title={selectedProject.title} />
        )}
        <div className="mt-6 text-right">
          <button
            onClick={() => setSelectedProject(null)}
            className="px-4 py-2 bg-[var(--accent)] text-[var(--bold)] rounded-lg hover:bg-[var(--primary)] transition">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</>
  );
}

export default Work;
