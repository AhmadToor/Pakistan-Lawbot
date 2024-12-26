import { useRef, useEffect, useState } from 'react';
import ChatHistoryIcon from "@/assets/icons/ChatHistoryIcon";
import { NavLink } from "react-router-dom";

interface Chat {
  id: string;
  title: string;
  timestamp: string;
}

const chats: Chat[] = [
  { id: 'random-id', title: 'Chat title', timestamp: '1 sec ago' },
  { id: "1", title: "Views about democracy", timestamp: "1 hr ago" },
  { id: "2", title: "The importance of voting", timestamp: "2 hrs ago" },
  { id: "3", title: "How to engage in civic duties", timestamp: "3 hrs ago" },
  { id: "4", title: "The role of media in politics", timestamp: "4 hrs ago" },
  { id: "5", title: "Understanding political ideologies", timestamp: "5 hrs ago" },
  { id: "6", title: "Debate on climate change policies", timestamp: "6 hrs ago" },
  { id: "7", title: "Youth participation in elections", timestamp: "7 hrs ago" },
  { id: "8", title: "The significance of grassroots movements", timestamp: "8 hrs ago" },
  { id: "9", title: "Exploring the electoral process", timestamp: "9 hrs ago" },
  { id: "10", title: "The impact of social media on democracy", timestamp: "10 hrs ago" },
];

export function ChatHistory() {


  return (
    // <ScrollArea className="overflow-y-hidden  w-full">
      <div className="p-0 pt-2 w-full">
        {chats && chats.length > 0 ? (
          chats.map((chat) => (
            <ChatItem key={`chat-${chat.id}`} chat={chat} to={`/chat/${chat.id}`} />
          ))
        ) : (
          <p className='text-sm'>No Chats yet!</p>
        )}
      </div>
    // </ScrollArea>
  );
}

interface ChatItemProps {
  chat: Chat;
  to: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat, to }) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [truncatedTitle, setTruncatedTitle] = useState<string>(chat.title);

  useEffect(() => {
    const updateTitle = () => {
      if (titleRef.current) {
        const containerWidth = titleRef.current.offsetWidth;
        let text = chat.title;

   
        const measureTextWidth = (text: string): number => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (context && titleRef.current) {
            context.font = window.getComputedStyle(titleRef.current).font;
            return context.measureText(text).width;
          }
          return 0;
        };

       
        while (measureTextWidth(text) > containerWidth && text.length > 0) {
          text = text.slice(0, -1);
        }

        if (text.length < chat.title.length) {
          text += "..."; 
        }

        setTruncatedTitle(text);
      }
    };

    updateTitle();
    window.addEventListener('resize', updateTitle); 
    return () => {
      window.removeEventListener('resize', updateTitle);
    };
  }, [chat.title]);

  return (


    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center py-1.5 stroke-black rounded-lg px-2 my-1 w-[95%] hover:bg-primary-600 hover:text-white gap-2  hover:stroke-white  cursor-pointer text-xs ${isActive ? 'bg-primary-600 text-white stroke-white' : ''}`
      }
    >
      <div className="flex-shrink-0">
        <ChatHistoryIcon />
      </div>
      <div className="flex-grow overflow-hidden">
        <p ref={titleRef} className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">{truncatedTitle}</p>
      </div>
      <span className="text-[8px] flex-shrink-0">{chat.timestamp || "1 hr ago"}</span>
    </NavLink>
  );
}