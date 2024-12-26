import DashboardWrapper from '@/_layouts/DashboardWrapper';
import Logo2 from '@/assets/icons/Logo2';
import { SearchBar } from '@/components/dashboard/searchBar';
import { useChat } from '@/hooks/useChat';

const dynamicMessages = [
    { content: 'Draft a contract for a freelance designer, covering payment terms, and intellectual property.', emoji:'📝'},
    { content: 'Explain the concept of intellectual property rights and how they apply to digital art.', emoji:'📚'},
    { content: 'Summarize a recent Supreme Court ruling on data privacy in Pakistan.', emoji:'⚖️'},
    { content: 'What are the current data protection regulations for businesses in the EU?', emoji:'🕵️'},
]

const NewChatPage = () => {
    const {inputValue, searchSubmit ,handleInputChange, chatfunc} = useChat()
  return (
    <>
    <DashboardWrapper >
    <div className="opacity-40 bg-[length:100%_100%] h-screen bg-no-repeat bg-[url('./assets/images/chatbot.png')]" ></div>
    <div className="md:p-20 p-4 md:pt-14 pt-5 md:w-[77%] w-full overflow-y-auto h-screen absolute top-0 ">
    <header className="max-md:fixed max-md:top-0 max-md:bg-[#f6f1ed] max-md:py-2 max-md:z-[5] max-md:w-full"><Logo2/></header>
                    <h1 className="text-[22px] md:text-[32px] max-md:mt-12 mt-3 font-bold" style={{ background: 'linear-gradient(91.63deg, #000000 -1.14%, #8C1C40 17.11%, #A2764E 101.36%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hi there, Zar Wali Khan<br />
                        What would you like to know?</h1>
                    <p className="text-[12px] mt-1">You can use one of the most common prompts below <br />
                        or use your own to start knowing the law of state</p>
                        <div className="grid grid-row  sm:grid-cols-2  min-[1025px]:grid-cols-4 mt-7 gap-4">
                        {dynamicMessages.map((mesg, index)=>{
                            return(

                                <div  onClick={()=>{chatfunc(mesg.content)}} key={`dynamicmesg-${index}`}  className="flex flex-col text-gray-600 cursor-pointer max-w-sm p-4 bg-transparent border border-gray-200 rounded-2xl shadow hover:bg-primary-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p className="text-[12px] ">{mesg.content}</p>
                                    <p className="mt-auto">{mesg.emoji}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='my-20'></div>
      </div>
      <div className='md:w-[77%] w-full pb-4 px-8 md:px-14 bg-[#f9f5f4] absolute bottom-0 '>

                    <SearchBar 
                    placeholder='Ask or search anything...'
                    value={inputValue}
                    onChange={handleInputChange}
                    onSubmit={searchSubmit}
                    />
                      </div>
    </DashboardWrapper>

    </>
  )
};

export default NewChatPage;
