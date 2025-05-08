
import vesselmxLogo from "@assets/vesselmx_logo.png";
import removalAILogo from "@assets/245314b2-9efc-44d5-a09a-01b2067ca9b2_removalai_preview.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export const Logo = ({ className = "h-12", variant = "default" }: LogoProps) => {
  const logoSrc = variant === "footer" ? vesselmxLogo : removalAILogo;
  
  return (
    <img 
      src={logoSrc} 
      alt="Vessel México Logo" 
      className={className} 
    />
  );
};
