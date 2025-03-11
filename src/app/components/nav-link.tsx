interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: Readonly<NavLinkProps>) {
  return (
    <a href={href} className="hover:text-[#ff6a00] hover:font-bold hover:underline hover:decoration-3">{children}</a>
  );
}
