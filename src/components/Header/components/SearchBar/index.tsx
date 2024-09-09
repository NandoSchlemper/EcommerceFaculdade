import SearchIcon from "../../../../assets/search.png";

function SearchBar() {
  return (
    <div className="flex flex-row ml-4">
      <form
        action="GET"
        role="search"
        className="flex items-center w-full max-w-lg bg-[#F4EEFF] rounded-full shadow-md"
      >
        <input
          type="text"
          placeholder="Search products, brands and more..."
          className="grow p-2 bg-transparent w-96 outline-none text-gray-700 ml-3 text-lg"
        />
        <button
          type="button"
          className="p-2 bg-[#F4EEFF] text-white rounded-full hover:bg-[#DCD6F7] transition-colors"
        >
          <img src={SearchIcon} alt="search" className="size-10" />
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
