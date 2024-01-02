import React from 'react';

type NavItemProps = {
  href: string;
  subItem?: boolean;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ href, children, subItem }) => {
  const linkClasses = `hover:text-gray-300 ${subItem ? 'pl-8' : ''}`;

  return (
    <a href={href} className={linkClasses}>
      {children}
    </a>
  );
};

const NavigationBar: React.FC = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">URI ICRL Image Annotation Server V1.0</h1>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/missions">Missions</NavItem>
        <NavItem href="/annotate-image">Annotate an Image</NavItem>
        <div className="relative">
          <button
            className="hover:text-gray-300 focus:outline-none"
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
          >
            My Account
          </button>
          {isSubMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg py-2 z-10">
              <div className="flex flex-col items-start">
                <NavItem href="/settings" subItem>
                  Settings
                </NavItem>
                <NavItem href="/logout" subItem>
                  Log Out
                </NavItem>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden">
        {/* Mobile Menu Icon */}
        {/* You can replace this with your own mobile menu toggle */}
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
    </nav>
  );
};

export default NavigationBar;
