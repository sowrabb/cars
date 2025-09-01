import Image from 'next/image';
import { ArrowLeft, CheckCircle, Clock, Shield, AlertTriangle, FileText } from 'lucide-react';
import Link from 'next/link';

// Utility function to get correct image path
const getImagePath = (imageName: string) => {
  if (typeof window !== 'undefined') {
    // Client-side: use current domain
    return `/${imageName}`;
  }
  // Server-side: use environment-based path
  if (process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS) {
    return `https://ocars.app/${imageName}`;
  }
  if (process.env.NODE_ENV === 'production') {
    return `/cars/${imageName}`;
  }
  return `/${imageName}`;
};

export default function TermsPage() {
  const terms = [
    {
      id: 1,
      text: "The Host must provide the car to the customer within 15 minutes of the booking time.",
      icon: Clock,
      highlight: "15 minutes"
    },
    {
      id: 2,
      text: "The Host must take clear pictures of the car before handing it over to the customer.",
      icon: FileText,
      highlight: "clear pictures"
    },
    {
      id: 3,
      text: "The Host must collect a security deposit, along with the customer's driving license and Aadhaar card, before giving the car.",
      icon: Shield,
      highlight: "security deposit, driving license, Aadhaar card"
    },
    {
      id: 4,
      text: "The car must be clean and tidy before handing it over to the customer.",
      icon: CheckCircle,
      highlight: "clean and tidy"
    },
    {
      id: 5,
      text: "The car must have a valid FASTag installed.",
      icon: CheckCircle,
      highlight: "valid FASTag"
    },
    {
      id: 6,
      text: "The Host must be available to attend to customers 24/7.",
      icon: Clock,
      highlight: "24/7"
    },
    {
      id: 7,
      text: "The car must be a 2017–2025 model.",
      icon: CheckCircle,
      highlight: "2017–2025 model"
    },
    {
      id: 8,
      text: "We guarantee 15–20 bookings per month.",
      icon: CheckCircle,
      highlight: "15–20 bookings per month"
    },
    {
      id: 9,
      text: "The Host must check for any pending challans before giving and after receiving the car. The company is not responsible for any issues arising from missed challans.",
      icon: AlertTriangle,
      highlight: "pending challans"
    },
    {
      id: 10,
      text: "The Host must compulsorily take pictures of the customer and properly check the car before handover.",
      icon: FileText,
      highlight: "pictures of the customer"
    },
    {
      id: 11,
      text: "The customer and the company are not responsible for wear and tear of clutch plates, brake pads, and tyres. The Host must maintain their own car.",
      icon: AlertTriangle,
      highlight: "wear and tear of clutch plates, brake pads, and tyres"
    },
    {
      id: 12,
      text: "In case of total loss, if the customer does not pay, the company will pay a fixed compensation amount of ₹40,000.",
      icon: Shield,
      highlight: "₹40,000"
    },
    {
      id: 13,
      text: "If the car is offline or blocked for more than 3 days, the Host will not be eligible for new bookings.",
      icon: AlertTriangle,
      highlight: "3 days"
    },
    {
      id: 14,
      text: "After handing over the car, the Host must ask the customer for feedback. Positive feedback increases the chances of getting more bookings.",
      icon: CheckCircle,
      highlight: "feedback"
    },
    {
      id: 15,
      text: "The Host must check the car thoroughly upon return. Once the customer has left, the Host cannot hold them responsible for any damages.",
      icon: AlertTriangle,
      highlight: "check the car thoroughly"
    },
    {
      id: 16,
      text: "Before handing over the car, the Host must check the battery, stepney (spare tyre), and tyres.",
      icon: CheckCircle,
      highlight: "battery, stepney, and tyres"
    },
    {
      id: 17,
      text: "In case the car is stolen, the company will assist with all legal documentation.",
      icon: Shield,
      highlight: "legal documentation"
    },
    {
      id: 18,
      text: "If the Host does not receive the booking amount due to technical issues, the amount will be refunded within 3 working days.",
      icon: Clock,
      highlight: "3 working days"
    },
    {
      id: 19,
      text: "Once a customer books the car, if the Host fails to provide the car for any reason, the Host will be charged a ₹3,000 penalty.",
      icon: AlertTriangle,
      highlight: "₹3,000 penalty"
    },
    {
      id: 20,
      text: "Once the customer returns the car, the Host will receive the payment within 24 hours.",
      icon: Clock,
      highlight: "24 hours"
    }
  ];

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
        
        <Link 
          href="/"
          className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-6 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
              Host Terms and Conditions
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Please read these terms carefully before becoming a host on our platform. 
              These conditions ensure the best experience for both hosts and customers.
            </p>
          </div>

          {/* Terms List */}
          <div className="space-y-6">
            {terms.map((term) => {
              const IconComponent = term.icon;
              return (
                <div key={term.id} className="card p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-[#DC2626] bg-[#FEF2F2] px-2 py-1 rounded">
                          {term.id}
                        </span>
                      </div>
                      <p className="text-[#374151] leading-relaxed">
                        {term.text.split(term.highlight).map((part, index, array) => (
                          <span key={index}>
                            {part}
                            {index < array.length - 1 && (
                              <span className="font-semibold text-[#DC2626] bg-[#FEF2F2] px-1 rounded">
                                {term.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#111827] mb-2">Important Notice</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  By becoming a host on our platform, you agree to comply with all the terms and conditions listed above. 
                  Failure to adhere to these terms may result in suspension or termination of your host account. 
                  If you have any questions about these terms, please contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 lg:px-6 py-8 border-t border-[#E5E7EB] mt-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} OCARS
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Home
            </Link>
            <Link href="#privacy" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Privacy
            </Link>
            <Link href="#contact" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
