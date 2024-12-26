import DashboardWrapper from "@/_layouts/DashboardWrapper";
import { SearchBar } from "@/components/dashboard/searchBar";
import { JudgementBox } from "@/components/judgements/judgementBox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const JudgementPage = () => {
  const [isAdvanced,setIsAdvanced]= useState(false)
  return (
    <DashboardWrapper>
      <div className="opacity-40 bg-[length:100%_100%] h-screen bg-no-repeat bg-[url('./assets/images/chatbot.png')]" ></div>
       <div className="mt-10 md:mt-0 md:p-20 p-4 md:pt-8 pt-2 md:w-[77%] w-full overflow-y-auto h-screen absolute top-0 ">
            <header className="max-md:fixed max-md:top-0 max-md:bg-[#f6f1ed] max-md:py-2 max-md:z-[5] max-md:w-full"><h1 className="text-[22px] md:text-[32px]  font-bold" style={{ background: 'linear-gradient(91.63deg, #000000 -1.14%, #8C1C40 17.11%, #A2764E 101.36%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Judgments</h1></header>
            <p className="text-[12px] ">You can use one of our ai search to find the judgements <br />
                by different judges in different times.</p>

            <p className="text-[12px] text-end my-3">Switch to <Button variant={'ghost'} onClick={()=>{setIsAdvanced(!isAdvanced)}} className="p-0 text-[12px] h-2 hover:text-primary-600 hover:bg-transparent text-primary-600 font-semibold">{isAdvanced?'Ai Search' : 'Advanced Search'}</Button></p>
            <SearchBar 
            placeholder="Salam Olsun, How can I help you?"
            isAdvanced={isAdvanced}
            />
           <JudgementBox/>
      </div>
      </DashboardWrapper>
  )
};

export default JudgementPage;
