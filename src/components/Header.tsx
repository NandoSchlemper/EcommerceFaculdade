import Logo from "../assets/apple-touch-icon.jpg";

function Header() {
  return (
    <header className="bg-[#424874] w-full h-20">
      <div className="flex ml-32">
        <a href="/">
          <img src={Logo} alt="logo" className="size-20 rounded-full items-center" />
        </a>
      </div>
    </header>
  );
}

export default Header;
