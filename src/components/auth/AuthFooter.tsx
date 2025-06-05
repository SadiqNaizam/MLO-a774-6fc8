import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // For link-styled buttons

interface AuthFooterLink {
  to: string;
  text: string;
}

interface AuthFooterProps {
  links?: AuthFooterLink[];
  centered?: boolean;
}

const AuthFooter: React.FC<AuthFooterProps> = ({ links = [], centered = true }) => {
  console.log("Rendering AuthFooter with links:", links.length);

  if (links.length === 0) {
    return null; // Don't render anything if no links are provided
  }

  return (
    <footer className={`mt-8 py-4 border-t border-gray-200 ${centered ? 'text-center' : ''}`}>
      <div className="space-x-4">
        {links.map((link, index) => (
          <Button key={index} variant="link" asChild>
            <Link to={link.to} className="text-sm text-gray-600 hover:text-gray-800">
              {link.text}
            </Link>
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default AuthFooter;