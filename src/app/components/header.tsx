import NavigationBar from "./navigation-bar";

export default function Header() {
  return (
    <header className="flex justify-start">
      <span className="font-[Consolas] text-3xl text-[#ff6a00]">
        &lt;André<br />&nbsp;&nbsp;Alves/&gt;
      </span>

      <NavigationBar />
    </header>
  );
}
