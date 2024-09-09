import Logo from "../../assets/apple-touch-icon.jpg";
import SearchBar from "./components/SearchBar/index";
import NavBar from "./components/NavBar";

function Header() {
  return (
    <header className="bg-[#424874] w-screen h-28 flex items-center justify-between px-8  ">
      <div className="flex items-center space-x-8">
        <div className="flex mx-96 items-center">
          <a href="/">
            <img src={Logo} alt="logo" className="size-20 rounded-full items-center" />
          </a>
          <SearchBar />
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
