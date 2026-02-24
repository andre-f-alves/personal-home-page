import Image from "next/image"
import Link from "next/link"
import Icon from "./icon"

function TechLabel({ technology }: { technology: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr] items-center gap-2 px-6 py-2 rounded-full text-sm bg-panel-color shadow-md">
      <Icon icon={`material-icon-theme:${technology.toLowerCase()}`} height={20} />
      <span>{technology}</span>
    </li>
  )
}

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  imageSrc: string
  href: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  href
}: Readonly<ProjectCardProps>) {
  return (
    <div className="flex flex-col gap-4 min-w-2xs max-w-90 p-6 rounded-xl bg-panel-color dark:bg-(image:--background) shadow-lg">
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
      
      <p>{description}</p>

      <Link
        className="w-max py-2 px-6 rounded-full font-bold bg-brand hover:bg-hover"
        href={href}
      >Ver projeto</Link>
    </div>
  )
}
