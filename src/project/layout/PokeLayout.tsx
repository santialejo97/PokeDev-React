import { Outlet } from "react-router";
import { Header } from "../components";

const PokeLayout = () => {
  return (
    <>
      <div className="flex h-dvh flex-col overflow-hidden">
        <Header />
        <main className="m-5 min-h-0 flex-1 p-4 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PokeLayout;
