import image from "./asset/selin.jpg";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1>PROFILE ASSINGMENT</h1>
      <img
          src={image}
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Janno Chua</h1>
          <p>Purok 6 Kiwalan, Iligan City</p>
          <p>jannochristian@gmail.com</p>
        </div>
    </header>
  );
}
export default Header;
