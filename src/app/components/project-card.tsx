export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-4 min-w-2xs max-w-90 p-6 rounded-xl bg-[hsl(0,0%,98%)] dark:bg-radial-[at_0%_0%] dark:from-[#2b2b2b] dark:to-[#0f0f0f] shadow-lg">
      <div className="w-full aspect-video rounded-xl bg-gray-700">
      </div>

      <h3 className="text-h3">Title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellat obcaecati libero doloribus veritatis autem eum iusto asperiores odio quae earum quod repudiandae sequi esse dolorum, reiciendis voluptatum est? Laborum?
      </p>
      
      <div>
        <button type="button" className="font-bold py-2 px-6 rounded-full bg-brand">Ver projeto</button>
      </div>
    </div>
  )
}
