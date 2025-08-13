import { useState } from "react";

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Spaceport",
      description: "A business website for Spaceport from Gallium31",
      tech: ["HTML5", "Wordpress", "PHP", "Figma"],
      link: "https://spaceport.ph/",
      image: "/media/images/spaceportThumbnail.png"
    },
    {
      title: "AGES: Automated Gate Entry System",
      description: "Smart gate model using RFID, ESP32, and Firebase with real-time web monitoring.",
      tech: ["HTML5", "Firebase", "Figma"],
      link: null,
      image: "/media/images/schoolProjectThumb.png",
      gallery: [
        "/media/images/schoolProject1.png",
        "/media/images/schoolProject2.png"
      ],
      details:
        "A scale model smart gate solution for Hillcrest Village, built with RFID technology, ESP32 microcontroller, and DC motors to automate access. Tracks vehicles, residents, and visitors with data stored in Firebase, and includes a built-in HTML5 web dashboard for real-time monitoring."
    },
    {
      title: "RFG Goods and Trading",
      description: "Online ordering platform with streamlined ordering and management features.",
      tech: ["HTML5", "Laravel", "Tailwind", "MySQL", "Figma"],
      link: null,
      image: "/media/images/schoolProjectThumb.png",
      gallery: [
        "/media/images/schoolProject1.png",
        "/media/images/schoolProject2.png"
      ],
      details:
        "A web-based ordering system for RFG Goods built with Laravel, Tailwind CSS, and MySQL. Designed to streamline orders, enhance user experience, and provide efficient order management for the business."
    },
    {
      title: "MERN Employee Management System",
      description: "Dynamic MERN-based employee management tool with CRUD for a technical exam.",
      tech: ["React", "MongoDB", "NodeJS", "Express", "Docker", "Postman"],
      link: null,
      image: "/media/images/schoolProjectThumb.png",
      gallery: [
        "/media/images/schoolProject1.png",
        "/media/images/schoolProject2.png"
      ],
      details:
        "A web-based ordering system for RFG Goods built with Laravel, Tailwind CSS, and MySQL. Designed to streamline orders, enhance user experience, and provide efficient order management for the business."
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
              className="bg-[var(--card)] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
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
                      className="bg-[var(--accent)] text-[var(--bold)] text-sm px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[var(--accent)] text-[var(--bold)] rounded-xl hover:bg-[var(--primary)] transition duration-300"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-block px-4 py-2 bg-[var(--accent)] text-[var(--bold)] rounded-xl hover:bg-[var(--primary)] transition duration-300"
                  >
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
              {selectedProject.gallery && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="rounded-lg object-cover w-full"
                    />
                  ))}
                </div>
              )}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-[var(--accent)] text-[var(--bold)] rounded-lg hover:bg-[var(--primary)] transition"
                >
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
