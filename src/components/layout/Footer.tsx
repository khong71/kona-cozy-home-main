import { MapPin, Phone, MessageCircle, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Brand & Contact */}
          <div className="space-y-6">
            <a href="/" className="text-3xl font-bold">
              K<span className="text-primary">Ö</span>NA
            </a>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <p>
                  123 ถนนพหลโยธิน แขวงจตุจักร
                  <br />
                  เขตจตุจักร กรุงเทพฯ 10900
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <p>02-123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <p>LINE: @KONA</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Online Stores */}
          <div>
            <h4 className="font-bold mb-4">ร้านค้าออนไลน์</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shopee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lazada
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LINE Shopping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  TikTok Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - About & Services */}
          <div>
            <h4 className="font-bold mb-4">เกี่ยวกับเรา</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  เกี่ยวกับ KONA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  นโยบายการจัดส่ง
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  นโยบายการคืนสินค้า
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  เงื่อนไขการรับประกัน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  คำถามที่พบบ่อย
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="font-bold mb-4">สมัครรับข่าวสาร</h4>
            <p className="text-sm text-background/70 mb-4">
              ติดตามโปรโมชั่นและข่าวสารใหม่ล่าสุดจาก KONA
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="อีเมลของคุณ"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="default">ส่ง</Button>
            </div>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © 2026 KONA Furniture. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">
                VISA
              </div>
              <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">
                MasterCard
              </div>
              <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">
                PromptPay
              </div>
              <div className="bg-background/10 px-3 py-1 rounded text-xs font-medium">
                JCB
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
