import { useState } from "react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Menu, X } from "lucide-react";

interface DashWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = ({ children }: DashWrapperProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const toggleMenuFuncForScreen = () => {
    if (isMenuOpen) {
      setIsVisible(false);
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500);
    }
  };

  return (
    <div className="md:grid md:grid-cols-[23fr_77fr]">
      <button
        className="absolute right-5 top-2 md:hidden p-1"
        onClick={toggleMenu}
        style={{ zIndex: '1000' }}
      >
        {isVisible ? <X /> : <Menu />}
      </button>
      <AppSidebar openMobile={isMenuOpen} sidebarVisible={isVisible} />

      <div className="h-screen" onClick={toggleMenuFuncForScreen}>
        {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;