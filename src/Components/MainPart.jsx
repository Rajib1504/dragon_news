import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";

const MainPart = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:grid md:justify-between md:items-start grid-cols-12 sm:gap-4 md:gap-0 ">
        <aside className="col-span-2">
          <LeftNav></LeftNav>
        </aside>
        <main className="col-span-7">center Dispaly</main>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </div>
    </div>
  );
};

export default MainPart;
