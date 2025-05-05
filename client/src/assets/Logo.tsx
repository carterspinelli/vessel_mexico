
import vesselmxLogo from "@assets/vesselmx_logo.png";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "h-12" }: LogoProps) => {
  return (
    <img 
      src={vesselmxLogo} 
      alt="Vessel México Logo" 
      className={className} 
    />
  );
};
