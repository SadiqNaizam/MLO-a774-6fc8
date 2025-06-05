import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

interface AuthHeaderProps {
  logoText?: string;
  logoHref?: string;
  // Add imageUrl if you plan to use an image logo
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  logoText = "AppLogo",
  logoHref = "/",
}) => {
  console.log("Rendering AuthHeader");
  return (
    <header className="py-6 mb-8 text-center">
      <Link to={logoHref} className="text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
        {/* Placeholder for an actual SVG logo or image if needed */}
        {logoText}
      </Link>
    </header>
  );
};

export default AuthHeader;