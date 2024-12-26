import { useEffect,useRef } from "react";
import DashboardWrapper from "@/_layouts/DashboardWrapper";
import { SearchBar } from "@/components/dashboard/searchBar";
import UserMesg from '@/components/chat/usermesgComponent'
import AiMesg from '@/components/chat/aimesgComponent'
import { useChat } from "@/hooks/useChat";
import { message } from "@/data/chat";
// import userimg from '@/assets/images/dp.png'




const ChatPage = () => {
    const {  inputValue, searchSubmit, handleInputChange } = useChat();
    
    const chatboxRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTo({ top: chatboxRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [message]);

  return (
    <DashboardWrapper>
        
        <header className="fixed z-[5] top-0 flex md:px-20 px-4 items-center bg-[#f9f5f4] md:w-[75.9%] w-[97%]  py-2"><h4 className=" font-semibold mt-[4px] text-[22px] " style={{ background: 'linear-gradient(91.63deg, #000000 -1.14%, #8C1C40 17.11%, #A2764E 101.36%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Chat Title</h4></header>
        <div ref={chatboxRef} className="md:p-20 pt-12 mt-10 md:mt-0 bg-[#f9f5f4] p-4 md:pt-12 pt-2 md:w-[77%] w-full h-screen overflow-y-auto flex flex-col absolute top-0  ">
        {message && message.length > 0 ? (
    message.map((message, index) => (
        <div className="flex flex-col" key={index}>
            {message.sender === 'user' ? (
                <UserMesg  mesg={message.text}   /> // userimg={userimg}
            ) : (
                <AiMesg mesg={message.text} />
            )}
        </div>
    ))
) : (
    <p className="text-xs mt-2">No messages yet.</p>
)}
<div className="my-6"></div>
        </div>
<div className='md:w-[75.9%] w-[97%] pb-4 px-8 md:px-14 bg-[#f9f5f4] absolute bottom-0 '>
                    <SearchBar 
                    placeholder='Ask or search anything...'
                    value={inputValue}
                    onChange={handleInputChange}
                    onSubmit={searchSubmit}
                    />
                      </div>
    </DashboardWrapper>
  )
};

export default ChatPage;
