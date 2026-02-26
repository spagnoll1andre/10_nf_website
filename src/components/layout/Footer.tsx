import { navItems } from "@/data/navigation";

export default function Footer() {
  return (
    <div data-section="Footer">
      <p>Footer — {navItems.map((i) => i.label).join(" · ")} | social | copyright</p>
    </div>
  );
}
