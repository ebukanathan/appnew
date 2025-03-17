import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold">MySite</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Dropdown title="Home"></Dropdown>
            <Dropdown title="Services">
              <DropdownItem>Web Development</DropdownItem>
              <DropdownItem>SEO Optimization</DropdownItem>
              <DropdownItem>UI/UX Design</DropdownItem>
            </Dropdown>

            <Dropdown title="Products">
              <DropdownItem>Landing Pages</DropdownItem>
              <DropdownItem>E-commerce</DropdownItem>
              <DropdownItem>Web Apps</DropdownItem>
            </Dropdown>

            <Dropdown title="Resources">
              <DropdownItem>Blog</DropdownItem>
              <DropdownItem>Case Studies</DropdownItem>
              <DropdownItem>Support</DropdownItem>
            </Dropdown>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <Dropdown title="Services" mobile>
            <DropdownItem>Web Development</DropdownItem>
            <DropdownItem>SEO Optimization</DropdownItem>
            <DropdownItem>UI/UX Design</DropdownItem>
          </Dropdown>

          <Dropdown title="Products" mobile>
            <DropdownItem>Landing Pages</DropdownItem>
            <DropdownItem>E-commerce</DropdownItem>
            <DropdownItem>Web Apps</DropdownItem>
          </Dropdown>

          <Dropdown title="Resources" mobile>
            <DropdownItem>Blog</DropdownItem>
            <DropdownItem>Case Studies</DropdownItem>
            <DropdownItem>Support</DropdownItem>
          </Dropdown>
        </div>
      )}
    </nav>
  );
}

// Dropdown Component
function Dropdown({ title, children, mobile }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-1 text-white hover:text-gray-300">
        {title}
        {/* <ChevronDown size={16} /> */}
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${
            mobile ? "relative w-full" : "w-48"
          } mt-2 origin-top-right bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

// Dropdown Item Component
function DropdownItem({ children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={`block px-4 py-2 text-sm ${active ? "bg-gray-200" : ""}`}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}
