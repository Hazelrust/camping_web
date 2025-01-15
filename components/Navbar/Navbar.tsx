import { Darkmode } from "./Darkmode";
import DropdownListmenu from "./DropdownListmenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* Darkmod & Profile */}
        <div className="flex gap-4">
          <Darkmode/>
          <DropdownListmenu/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;