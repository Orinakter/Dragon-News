import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNav from "../Components/LayoutComponent/LeftNav";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div className="">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto py-7 ">
          <LatestNews></LatestNews>
        </section>
        
      </header>
      <nav>
      <section className="w-11/12 mx-auto py-7 ">
            <NavBar></NavBar>
        </section>
      </nav>
      <main className="grid grid-cols-1 lg:grid-cols-12 w-11/12 mx-auto pt-5 gap-5 text-center">
        <aside className="col-span-3"><LeftNav></LeftNav></aside>
        <section className="col-span-6">Main Navbar</section>
        <aside className="col-span-3">Right Navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
