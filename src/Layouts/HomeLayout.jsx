import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div className="">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto py-7 ">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto py-7 ">
            <NavBar></NavBar>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
