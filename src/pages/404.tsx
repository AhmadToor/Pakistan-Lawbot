import DashboardWrapper from "@/_layouts/DashboardWrapper";
import { Link } from "react-router-dom";


const NoPage = () => {
  return (
    // <DashboardWrapper>
    <div className="  w-[100%] h-screen absolute top-0 flex flex-col md:items-center justify-center" >
      <h1 className="md:text-[60px] text-[40px]  font-bold text-center" style={{ background: 'linear-gradient(91.63deg, #000000 -1.14%, #8C1C40 17.11%, #A2764E 101.36%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Oops!   <br /> No Page Found.</h1>
      <Link to={'/'} className="bg-primary-600 mt-2 w-max mx-auto text-white px-2 py-2 rounded-xl text-center text-xs md:text-sm">Go back to home</Link>
    </div>
    // </DashboardWrapper>
  )
};

export default NoPage;