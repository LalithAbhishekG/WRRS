import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../Assets/Logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Flex row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo in center column */}
          <div className="flex-1 flex mt-1">
            <img
              src={Logo}
              alt="Logo"
              className="h-36 self-start drop-shadow-md mt-15"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 font-medium text-sm text-pink-900 hover:text-pink-700"
              >
                About Us <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 w-48 border border-gray-100">
                  <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Our Mission
                  </div>
                  <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Our Vision
                  </div>
                  <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Meet the Team
                  </div>
                </div>
              )}
            </div>

            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              Our Impact
            </div>
            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              Get Involved
            </div>
            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              News & Events
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-pink-900" />
            ) : (
              <Menu size={28} className="text-pink-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              About Us
            </div>
            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              Our Impact
            </div>
            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              Get Involved
            </div>
            <div className="font-medium text-sm text-pink-900 hover:text-pink-700">
              News & Events
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
