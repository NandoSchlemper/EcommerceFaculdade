import CartIcon from "../../../assets/cart.png";

export function NavBar() {
  return (
    <nav className="flex items-center space-x-6">
      <ul className="flex items-center space-x-4">
        <li>
          <a href="#" className="text-white text-lg hover:underline">
            Categories
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-lg hover:underline">
            Sale
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-lg hover:underline">
            Create account
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-lg hover:underline">
            Login
          </a>
        </li>
        <li>
          <a href="#">
            <img src={CartIcon} alt="cart" className="size-8" />
          </a>
        </li>
      </ul>
    </nav>
  );
}