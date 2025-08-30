import Image from 'next/image';
import { 
  Zap, 
  DollarSign, 
  Shield, 
  ChevronRight,
  Menu
} from 'lucide-react';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] h-[72px] flex items-center justify-between px-6 lg:px-6">
        <div className="flex items-center">
          {/* OCARS Logo */}
          <Image
            src="/cars/ocars-logo.png"
            alt="OCARS — Car Rental"
            width={350}
            height={350}
            className="h-35 w-auto"
            priority
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#pricing" className="text-[#6B7280] hover:text-[#111827] transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-[#6B7280] hover:text-[#111827] transition-colors">
            FAQ
          </a>
          <a href="#hero" className="btn-primary flex items-center gap-2">
            Get the App
            <ChevronRight className="w-4 h-4" />
          </a>
        </nav>
        
        {/* Mobile: Get App button */}
        <button className="lg:hidden btn-outline text-sm flex items-center gap-2">
          <Menu className="w-4 h-4" />
          Get the App
        </button>
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
              
              {/* Store Badges */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <a 
                    href="https://apps.apple.com/in/app/ludo-king/id993090598" 
                    aria-label="Download on the App Store"
                    className="h-[44px] w-auto transition-transform hover:scale-105"
                  >
                    <Image
                      src="/cars/app-store-badge.png"
                      alt="Download on the App Store"
                      width={260}
                      height={76}
                      className="h-[44px] w-auto"
                    />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.ludo.king&hl=en" 
                    aria-label="Get it on Google Play"
                    className="h-[44px] w-auto transition-transform hover:scale-105"
                  >
                     <Image
                       src="/cars/google-play-badge.png"
                       alt="Get it on Google Play"
                       width={260}
                       height={76}
                       className="h-[44px] w-auto"
                     />
                  </a>
                </div>
                <p className="text-sm text-[#6B7280]">Available on iOS & Android</p>
              </div>
              
              {/* Primary CTA */}
              <button className="btn-primary w-full sm:w-auto flex items-center gap-2 mx-auto lg:mx-0">
                Get Started
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-[16/9] bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm flex items-center justify-center overflow-hidden">
                  <Image
                    src="/cars/banner.png"
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
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#111827] mb-2">Zero Deposit Options</h3>
              <p className="text-sm text-[#6B7280]">Choose from flexible payment plans with no hidden fees</p>
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
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#terms" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Terms
            </a>
            <a href="#privacy" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Privacy
            </a>
            <a href="#contact" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4">
        <div className="flex gap-3">
          <a 
            href="https://apps.apple.com/in/app/ludo-king/id993090598" 
            className="flex-1 flex items-center justify-center"
          >
            <Image
              src="/cars/app-store-badge.png"
              alt="Download on the App Store"
              width={130}
              height={38}
              className="h-[38px] w-auto"
            />
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.ludo.king&hl=en" 
            className="flex-1 flex items-center justify-center"
          >
            <Image
              src="/cars/google-play-badge.png"
              alt="Get it on Google Play"
              width={130}
              height={38}
              className="h-[38px] w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
