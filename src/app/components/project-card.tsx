import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
}

export default function ProjectCard({
  title, 
  description,
  imageSrc
}: Readonly<ProjectCardProps>) {
  return (
    <div className="flex flex-col gap-4 min-w-2xs max-w-90 p-6 rounded-xl bg-[hsl(0,0%,98%)] dark:bg-radial-[at_0%_0%] dark:from-[#2b2b2b] dark:to-[#0f0f0f] shadow-lg">
      <div className="w-full aspect-video rounded-xl pt-2 px-3 bg-gray-400 shadow-[inset_0_0_4px_1px_rgba(0,0,0,0.2)]">
        <Image
          className="h-max rounded-md"
          src={imageSrc}
          alt={title}
          width={400}
          height={225}
        />
      </div>

      <h3 className="text-h3">{title}</h3>
      <p>{description}</p>
      
      <div>
        <Link
          className="font-bold py-2 px-6 rounded-full bg-brand"
          href="#"
        >Ver projeto</Link>
      </div>
    </div>
  )
}
