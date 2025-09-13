function SideBar() {
   return (
    <aside className="w-1/4 bg-gray-200 p-4">
      <h3 className="font-semibold">Menu</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Projects</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </aside>
  );
}
export default SideBar;
