import Header from "../Components/Header";
import MainPart from "../Components/MainPart";
import NavBar from "../Components/NavBar";
const HomeLayout = () => {
  return (
    <div className="font-Poppins ">
      <header>
        <Header></Header>
      </header>
      <nav className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 border-2 mx-auto p-5">
        <MainPart></MainPart>
      </main>
    </div>
  );
};

export default HomeLayout;
