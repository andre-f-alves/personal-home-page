import Iconify from "./iconify"

interface ContactLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: string
}

const RECIPIENT = "andre.fortes.alves06@gmail.com"
const WHATSAPP_NUMBER = "5513997866588"

const links: ContactLinkProps[] = [
  { href: "https://github.com/andre-f-alves", icon: "mdi:github", target: "_blank" },
  { href: "https://linkedin.com/in/andré-alves-85ab73249", icon: "mdi:linkedin", target: "_blank" },
  { href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: "mdi:whatsapp", target: "_blank" },
  { href: `mailto:${RECIPIENT}`, icon: "mdi:email-outline" }
]

function ContactLink({ icon, ...props }: Readonly<ContactLinkProps>) {
  return (
    <li>
      <a {...props} className="hover:text-hover">
        <Iconify icon={icon} height={24} className="text-current" />
      </a>
    </li>
  )
}

export default function ContactLinks() {
  return (
    <ul className="flex justify-evenly items-center md:gap-[3vw] lg:gap-[2rem] w-full list-none">
      {
        links.map((link, index) => (
          <ContactLink key={index} {...link} />
        ))
      }
    </ul>
  )
}
