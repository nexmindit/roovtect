import Image from "next/image";

export interface Project {
    name: string;
    category: string;
    location: string;
    image: string;
}

interface ServiceGalleryProps {
    title?: string;
    subtitle?: string;
    projects: Project[];
}

export default function ServiceGallery({
    title = "Our Projects",
    subtitle = "ผลงานของเรา",
    projects,
}: ServiceGalleryProps) {
    return (
        <section className="py-12 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto mb-10 text-center">
                <p className="text-xs md:text-sm uppercase tracking-[0.1em] text-[#8f99a2] mb-3">
                    {subtitle}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1f2c38]">
                    {title}
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="group overflow-hidden rounded-[28px] bg-white shadow-sm"
                    >
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                        </div>
                        <div className="p-5 space-y-1">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#c1a471]">
                                {project.category}
                            </p>
                            <h3 className="text-lg font-semibold">{project.name}</h3>
                            <p className="text-sm text-[#6c7480]">{project.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
