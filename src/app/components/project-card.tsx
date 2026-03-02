import Image from "next/image"
import Link from "next/link"
import Iconify from "./iconify"

function TechLabel({ technology }: { technology: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr] items-center gap-2 px-6 py-2 rounded-full text-sm bg-panel-color shadow-[0_1px_2px_1px_rgba(0,0,0,0.1)] cursor-default hover:scale-103 hover:shadow-[0_2px_5px_1px_rgba(0,0,0,0.075)] transition-all duration-200 ease-in-out">
      <Iconify icon={`material-icon-theme:${technology.toLowerCase()}`} height={20} />
      <span>{technology}</span>
    </li>
  )
}

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  imageSrc: string
  projectLink: string,
  repositoryLink?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  projectLink,
  repositoryLink = ""
}: Readonly<ProjectCardProps>) {
  return (
    <div className="flex flex-col gap-4 min-w-2xs max-w-sm p-6 rounded-xl bg-panel-color dark:bg-(image:--background) shadow-lg">
      <div className="w-full aspect-video overflow-y-hidden rounded-xl pt-3 bg-(image:--background) shadow-[inset_0_1px_4px_1px_rgba(0,0,0,0.5)]">
        <Image
          className="rounded-md mx-auto shadow-[0_1px_3px_1px_rgba(0,0,0,0.5)]"
          src={imageSrc}
          alt={title}
          width={288}
          height={205}
        />
      </div>

      <h3 className="text-h3 text-title-color">{title}</h3>

      <ul className="flex flex-wrap items-center gap-2">
        {technologies.map((tech, index) => (
          <TechLabel key={index} technology={tech} />
        ))}
      </ul>

      <p className="my-3">{description}</p>

      <div className="flex flex-col md:flex-row gap-4 text-nowrap">
        <Link
          className="py-2 px-6 rounded-full border-2 border-brand font-bold text-center bg-brand hover:bg-hover hover:border-hover"
          href={projectLink}
          target="_blank"
        >
          Ver projeto
        </Link>

        {repositoryLink && (
          <Link
            className="grid grid-cols-[auto_auto] justify-center items-center gap-2 py-2 px-6 border-2 border-brand rounded-full font-bold text-brand bg-brand/10 hover:text-hover hover:border-hover hover:bg-hover/10"
            href={repositoryLink}
            target="_blank"
          >
            <Iconify icon="mdi:github" height={24} color="var(--foreground)" />
            <span>Ver no GitHub</span>
          </Link>
        )}
      </div>
    </div>
  )
}
