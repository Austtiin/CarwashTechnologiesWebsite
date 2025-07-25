// src/app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects"; // Assuming you set up path aliases

export default function Projects() {
  return (
    <div className="bg-white">
      {/* ... Hero and Stats Sections ... */}

      {/* Projects Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col items-start overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {/* ... rest of the card content ... */}
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                  {/* ... etc ... */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ... CTA Section ... */}
    </div>
  );
}