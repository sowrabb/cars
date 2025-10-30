"use client";

import Image from 'next/image';
import { 
  Zap, 
  CheckCircle, 
  Shield, 
  Phone,
  MessageCircle,
  Car
} from 'lucide-react';

// Utility function to get correct image path
const getImagePath = (imageName: string) => {
  return `/${imageName}`;
};

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] h-[72px] flex items-center justify-between px-6 lg:px-6">
        <div className="flex items-center">
          {/* OCARS Logo */}
          <Image
            src={getImagePath("ocars-logo.png")}
            alt="OCARS — Car Rental"
            width={350}
            height={350}
            className="h-35 w-auto"
            priority
          />
        </div>
        
      </header>

      {/* Hero Section */}
      <section id="hero" className="px-4 lg:px-6 py-12 lg:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                        {/* Left Column */}
            <div className="text-center lg:text-left space-y-6">
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#111827] leading-tight">
                RIDE WITH RIGHT CARS
              </h1>
              
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Whether you&apos;re traveling with family, heading out for a solo trip, or simply looking for a great drive in a premium car, OCars offers the best car rental options.
              </p>
              
              {/* Attach Your Car - triggers call directly */}
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start">
                  <a 
                    href="tel:+917799110794"
                    className="btn-outline w-auto flex items-center gap-2 mx-auto lg:mx-0"
                  >
                    <Car className="w-4 h-4" />
                    Attach Your Car
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-[16/9] bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm flex items-center justify-center overflow-hidden">
                  <Image
                    src={getImagePath("banner.png")}
                    alt="OCARS car rental banner with multiple cars"
                    width={2048}
                    height={1117}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Features Strip */}
      <section className="px-4 lg:px-6 py-12 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-2">Instant Booking</h3>
              <p className="text-sm text-[#6B7280]">Book your car in seconds with our streamlined process</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-2">Fast Approvals & Listing</h3>
              <p className="text-sm text-[#6B7280]">Quick approval process and easy listing features</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-2">24×7 Roadside</h3>
              <p className="text-sm text-[#6B7280]">Round-the-clock support whenever you need assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 lg:px-6 py-8 border-t border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#6B7280] text-sm">
            © {currentYear} OCARS
          </div>
          
        </div>
      </footer>

      {/* Floating Action Buttons - All Devices */}
      <div className="fixed bottom-6 right-6 flex gap-3 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917799110794?text=Hi%2C%20I%20would%20like%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 min-w-[140px]"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">WhatsApp Now</span>
        </a>
        
        {/* Call Button */}
        <a
          href="tel:+917799110794"
          className="bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 min-w-[140px]"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm font-medium">Call Us Now</span>
        </a>
      </div>
    </div>
  );
}
