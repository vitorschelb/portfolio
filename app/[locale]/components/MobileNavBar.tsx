import MobileSidebar from "./MobileSidebar";
import ToggleLanguageMobile from "./ToggleLanguageMobile";

export default function MobileNavBar() {
  return (
  
<nav className="lg:hidden flex justify-between absolute h-30 w-screen top-0 bg-clean-white shadow-sm">
    <MobileSidebar />
    <ToggleLanguageMobile  />
</nav>

  )
}
