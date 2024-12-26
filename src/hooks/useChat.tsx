import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Message {
    text: string;          
    sender: 'user' | 'ai'; 
    timestamp: string;     
}

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const navigate = useNavigate()
    const getchat = useMutation({
        mutationKey: ['get-chat'],
        mutationFn: async (chatkey: string) => {
            const response = await fetch(`http://localhost:3000/chat/${chatkey}`, {
                method: 'GET'
            });
            return response.json();
        },
        onSuccess: (data) => {
            const formattedMessages: Message[] = data.map((msg: any) => ({
                text: msg.text,
                sender: msg.sender, 
                timestamp: msg.timestamp || new Date().toISOString() 
            }));

           if (chatId) {
               setMessages(formattedMessages);
               

           }
            
            
        },
        onError : (err)=>{
            return err
        }
    });
    interface PostMesg {
        mesg: Message; 
        chatkey?: string;
    }

    const postmesg = useMutation({
        mutationKey: ['post-chat'],
        mutationFn: async ({ chatkey = '' , mesg }: PostMesg) => {
            const response = await fetch(`http://localhost:3000/addchat/${chatkey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: mesg }) 
            });
            return response.json();
        },
        onMutate: () => {
           
            const emptyMessage: Message = {
                text: "", 
                sender: 'ai',
                timestamp: new Date().toISOString()
            };
    
           
            setMessages((prevMessages) => [...prevMessages, emptyMessage]);
    
           
            return { previousMessages: messages };
        },
        onSuccess: (data) => {
            const formattedMessages: Message = {
                text: data.mesg.text,
                sender: data.mesg.sender, 
                timestamp: data.mesg.timestamp || new Date().toISOString() 
            };
            setMessages((prevMessages) => {
                const messagesWithoutEmpty = prevMessages.slice(0, -1); 
                return [...messagesWithoutEmpty, formattedMessages]; 
            });
            const randomChatId = data.chatId
            if(!chatId){
                navigate(`/chat/${randomChatId}`)
            }
        },
        onError: (err,_, context) => {
            if (context?.previousMessages) {
                setMessages(context.previousMessages);
            }
            return err;
        }
    });

    const chatId  = window.location.pathname.split('/').pop();
    
    useEffect(() => {
        if (chatId) {
            getchat.mutate(chatId);
        } 
    }, [chatId]);

    const [inputValue, setInputValue] = useState('');
    

    const chatfunc = (usermesg: string) => {
        const newMessage: Message = { 
            text: usermesg, 
            sender: 'user', 
            timestamp: new Date().toISOString() 
        };
        
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        if (chatId){
            postmesg.mutate({ chatkey: chatId, mesg: newMessage })
        }else(
            postmesg.mutate({ mesg: newMessage })
            
        )

        
        
    };

    const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        chatfunc(inputValue);
        setInputValue('');
        
        
    };
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const scrollfunc = (chatbox: HTMLElement, duration: number) => {
        const scrollHeight = chatbox.scrollHeight;
        // const clientHeight = chatbox.clientHeight;
        const targetScrollPosition = scrollHeight ;
        const startScrollPosition = chatbox.scrollTop;
        const distance = targetScrollPosition - startScrollPosition;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            chatbox.scrollTop = startScrollPosition + distance * easeInOutQuad(progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };


    const typeWriter = (text : string , speed = 50) => {
        const [displayText, setDisplayText] = useState('');
      
        useEffect(() => {
          let i = 0;
          const typingInterval = setInterval(() => {
            if (i < text.length) {
              setDisplayText(prevText => prevText + text.charAt(i));
              i++;
            } else {
              clearInterval(typingInterval);
            }
          }, speed);
      
          return () => {
            clearInterval(typingInterval);
          };
        }, [text, speed]);
      
        return displayText;
      };

    return {
        inputValue,
        searchSubmit,
        handleInputChange,
        messages,
        scrollfunc,
        chatfunc,
        typeWriter
     
        
    };
};