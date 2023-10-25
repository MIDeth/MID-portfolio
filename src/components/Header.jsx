import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="h-[100vh] text-black top-20 left-[20%] fixed max-md:left-0 w-24 ">
        <Link to="/">
          <div className="ml-2 mb-14 w-14">
            <img src="logo/logo.svg" className="w-full" />
          </div>
        </Link>

        <div>
          <ul>
            <li className=" font-second my-3 hover:bg-[#737373] duration-700 py-[0.18rem] text-start rounded-md w-[4.2rem]">
              <span className="w-full text-xl text-[#787878] hover:text-[#eeeded] flex justify-center items-center">
                <Link to="/">home</Link>
              </span>
            </li>

            <li className=" font-second my-3 hover:bg-[#737373] duration-700 py-[0.18rem] text-start rounded-md w-[6.2rem]">
              <span className="w-full text-xl text-[#787878] hover:text-[#eeeded] flex justify-center items-center">
                <Link to="/oldWorks">old works</Link>
              </span>
            </li>
            <li className=" font-second my-3 hover:bg-[#737373] duration-700 py-[0.18rem] text-start rounded-md w-[5.5rem]">
              <span className="w-full text-xl text-[#787878] hover:text-[#eeeded] flex justify-center items-center">
                <Link to="/projects">projects</Link>
              </span>
            </li>
            <li className=" font-second my-3 hover:bg-[#737373] duration-700 py-[0.18rem] text-start rounded-md w-[4.2rem]">
              <span className="w-full text-xl text-[#787878] hover:text-[#eeeded] flex justify-center items-center">
                <Link to="/about">about</Link>
              </span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
