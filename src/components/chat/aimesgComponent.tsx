import Logo3 from '../../assets/icons/Logo3.js';
import Like from '../../assets/icons/Like.js';
import Dislike from '../../assets/icons/Dislike.js';
import Copy from '../../assets/icons/Copy.js';
import Downarrow from '../../assets/icons/Downarrow.js';
import {  useState } from 'react';
import { Check } from 'lucide-react';
import ReactMarkdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import remarkGfm from 'remark-gfm';

interface AiMesgProps {
  mesg: string;
  speed?: number;
}

const AiMesg = ({ mesg }: AiMesgProps) => {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [copied, setCopied] = useState(false)
  const handleLike = () => {
    if (dislike) {
      setDislike(!dislike)
      setLike(!like)
    } else {
      setLike(!like)
    }
  }
  const handleDislike = () => {
    if (like) {
      setLike(!like)
      setDislike(!dislike)
    } else {
      setDislike(!dislike)
    }
  }
  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000);
    navigator.clipboard.writeText(mesg)
  }
 

  
    
    const renderers: Components = {
      h1: ({ children }) => <h1 className="text-2xl font-bold ">{children}</h1>,
      h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
      h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
      p : ({children}) => <p className='text-sm'>{children}</p>,
      li: ({ children }) => <li className="list-disc ml-5">{children}</li>,
      a: ({ children, href }) => (
        <a href={href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      code: ({ className, children }) => {
        const language = className ? className.replace('language-', '') : '';
        return className ? (
          <SyntaxHighlighter className='overflow-auto w-[73vw] sm:w-full' language={language} remarkPlugins={[remarkGfm]} style={prism} customStyle={{ borderRadius: '8px', margin: '10px 0' }}>
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <span className="bg-gray-200  rounded py-0.1 px-0.5 text-xs">
            <code>{children}</code>
          </span>
        );
      },
    };
  


  return (
    <>
      <div className='flex flex-row items-center'>
        <div className="flex self-baseline items-center">
          <span className="text-xs  my-2  bg-primary-100 border-2 border-primary-600 font-bold rounded-full px-[7px] py-[7px] flex items-center">
            <Logo3 />
          </span>
        </div>
        <div className="flex flex-col text-sm gap-3 bg-transparent w-[80vw] rounded-3xl my-3 float-left px-3 pt-0">
          {mesg ? (
            <ReactMarkdown components={renderers}>{mesg}</ReactMarkdown>
          ) : (
            <span className="animate-ping ml-4 mt-2 h-5 w-5">&#9679;</span>
          )}
        </div>
      </div>
      <div className='flex gap-2 ml-16 mb-3'>

        <div className='flex '>
          <button onClick={handleLike} className={`${like ? 'stroke-1 stroke-primary-600 fill-primary-600' : 'stroke-[1.5] stroke-[#6E7075] fill-gray-100'}  flex shadow items-center rounded-s-full space-x-1 px-2 py-1 bg-gray-100 text-gray-600  hover:bg-gray-200 focus:outline-none`}>
            <span><Like /></span>
          </button>
          <button onClick={handleDislike} className={`${dislike ? 'stroke-1 stroke-primary-600 fill-primary-600' : 'stroke-[1.5] stroke-[#6E7075] fill-gray-100'}  flex shadow items-center rounded-e-full space-x-1 px-2 py-1 bg-gray-100 text-gray-600  hover:bg-gray-200 focus:outline-none`}>
            <span><Dislike /></span>
          </button>
        </div>
        <button onClick={handleCopy} className="flex items-center shadow space-x-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none">
          <span>{copied ? <Check className='h-[16px]' /> : <Copy />}</span>
        </button>
        <button className="flex items-center shadow space-x-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none">
          <span className="text-[8px] sm:text-[12px] text-[#34373E99]">Translate Response</span>
          <span><Downarrow /></span>
        </button>
      </div>
    </>
  );
};

export default AiMesg;