import Header from "./Header";
import ProfileContent from "./ProfileContent";
import SideBar from "./SideBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
