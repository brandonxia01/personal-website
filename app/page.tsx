export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black">
              Hi, I'm Brandon
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              A full-stack developer passionate about building clean, user-friendly web applications with modern
              technologies like Next.js, React, and Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a developer with a passion for creating exceptional digital experiences. With expertise in modern
                web technologies, I help businesses and individuals bring their ideas to life through clean, efficient
                code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying the outdoors.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black text-white text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Project One",
                description: "A modern web application built with Next.js and Tailwind CSS",
                tags: ["Next.js", "React", "Tailwind"],
              },
              {
                title: "Project Two",
                description: "Full-stack application with real-time features",
                tags: ["Node.js", "PostgreSQL", "WebSocket"],
              },
              {
                title: "Project Three",
                description: "Mobile-responsive design system",
                tags: ["React", "TypeScript", "Storybook"],
              },
              {
                title: "Project Four",
                description: "API development and integration",
                tags: ["API", "Backend", "Integration"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Send Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
