interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink({
  href,
  children,
}: Readonly<NavigationLinkProps>) {
  return (
    <a href={href} className="hover:text-[#ff6a00] hover:font-bold hover:underline hover:decoration-3">{children}</a>
  );
}
