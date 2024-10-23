import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useDropdownNavigation() {
  const location = useLocation();
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);

  const isActive = location.pathname.includes("/company/");

  const toggleDropdown = () => {
    if (!isActive) {
      setIsManuallyOpen(!isManuallyOpen);
    }
  };

  const isOpen = isActive || (isManuallyOpen && !isActive);

  useEffect(() => {
    if (!location.pathname.includes("/company/")) {
      setIsManuallyOpen(false);
    }
  }, [location.pathname]);

  return {
    isActive,
    isOpen,
    toggleDropdown,
  };
}
