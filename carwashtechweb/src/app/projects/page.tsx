import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "Description of Project One.",
    image: "/images/project1.jpg",
  },
  {
    title: "Project Two",
    description: "Description of Project Two.",
    image: "/images/project2.jpg",
  },
  {
    title: "Project Three",
    description: "Description of Project Three.",
    image: "/images/project3.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}