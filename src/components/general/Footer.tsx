import { socialsData } from "@/data/generalData";
import SocialIco from "@/components/general/SocialIco";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-4">
      <p className="text-gray-500">
        Made with ❤️ by{" "}
        <span className="text-[var(--foreground)]">Animesh Kumar</span>
      </p>
      <div className="flex items-center gap-4">
        {socialsData.map((item, index) => (
          <SocialIco key={index} {...item} />
        ))}
      </div>
    </footer>
  );
}
