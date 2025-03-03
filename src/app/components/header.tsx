import NavigationBar from "./navigation-bar";

export default function Header() {
  return (
    <header className="flex justify-start">
      <span className="text-3xl">
        &lt;André<br />Alves/&gt;
      </span>

      <NavigationBar />
    </header>
  );
}
