import { useState } from "react";
import { Search, Camera, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "New in", href: "#" },
    { label: "สินค้าทั้งหมด", href: "#" },
    { label: "ห้องนั่งเล่น", href: "#" },
    { label: "ห้องนอน", href: "#" },
    { label: "ห้องทำงาน", href: "#" },
    { label: "ห้องครัว", href: "#" },
    { label: "ของตกแต่ง", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="KÖNA" className="h-10 w-auto" />
          </a>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ค้นหาสินค้าหรือไอเดียแต่งบ้าน…"
                className="pl-4 pr-20 py-6 rounded-full border-border bg-secondary/50"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <Camera className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors">
                  <Search className="h-5 w-5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="default" className="hidden sm:flex rounded-full">
              Member
            </Button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Input
              type="text"
              placeholder="ค้นหาสินค้าหรือไอเดียแต่งบ้าน…"
              className="pl-4 pr-12 py-5 rounded-full border-border bg-secondary/50"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-full">
              <Search className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-border hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-3">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="default" size="sm" className="rounded-full px-6">
                Promotion
              </Button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="default" className="w-full rounded-full">
                Promotion
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
