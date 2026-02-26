import { navItems, navCtas } from "@/data/navigation";

export default function Navbar() {
  return (
    <div data-section="Navbar">
      <p>Navbar — logo | {navItems.map((i) => i.label).join(" · ")} | {navCtas.map((c) => c.label).join(" · ")}</p>
    </div>
  );
}
