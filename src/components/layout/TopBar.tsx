import { Globe } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-secondary py-2 px-4">
      <div className="container mx-auto flex items-center justify-end gap-6 text-sm">
        <div className="flex items-center gap-4">
          <button className="hover:text-primary transition-colors">EN</button>
          <span className="text-muted-foreground">/</span>
          <button className="text-primary font-medium">TH</button>
        </div>
        <a href="#" className="hover:text-primary transition-colors">
          E-Catalog
        </a>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
