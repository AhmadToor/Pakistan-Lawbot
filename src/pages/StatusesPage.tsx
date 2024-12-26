import DashboardWrapper from "@/_layouts/DashboardWrapper";
import { SearchBar } from "@/components/dashboard/searchBar";
import { StatusesBox } from "@/components/statuses/statusesbox";

const StatusesPage = () => {
  return (
    <DashboardWrapper>
      <div className="opacity-40 bg-[length:100%_100%] h-screen bg-no-repeat bg-[url('./assets/images/chatbot.png')]" ></div>
      <div className="md:p-20 p-4 md:pt-8 pt-2 md:w-[77%] w-full overflow-y-auto h-screen absolute top-0 ">
      <header className="max-md:fixed max-md:top-0 max-md:bg-[#f6f1ed] max-md:py-2 max-md:z-[5] max-md:w-full"><h1 className="text-[22px] md:text-[32px]   font-bold" style={{ background: 'linear-gradient(91.63deg, #000000 -1.14%, #8C1C40 17.11%, #A2764E 101.36%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Looking for Statuses?</h1></header>
            <p className="mt-10 md:mt-0 text-[12px] mb-4">You are at the right place if you are looking for statutes. <br /> Just put in the keywords and vohuu you have them..</p>
            <SearchBar 
            placeholder="Salam Olsun, How can I help you?"
            />
            <StatusesBox/>
      </div>
    </DashboardWrapper>
  )
};

export default StatusesPage;
