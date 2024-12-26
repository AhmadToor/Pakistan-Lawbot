import { Avatar,AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";


interface UserMesgProps {
  mesg : string
  userimg? : string
}

const UserMesg = ({mesg,userimg} : UserMesgProps) => {
  return (
    <div className="my-1  self-end items-center w-fit flex gap-3 bg-primary-100 rounded-3xl px-3 py-1">
            <p className="my-2 text-sm">{mesg}</p><Avatar  className={`bg-primary-100 self-baseline shrink-0 h-9 w-9 my-2  border-[2px] rounded-full border-primary-600 ${!userimg && ('pt-[3px]')}`}>
        <AvatarImage className="rounded-full" src={userimg} alt="Your Image" />
        <AvatarFallback className="text-[12px] ml-[3px]  text-center">YOU</AvatarFallback>
      </Avatar>
        
        </div>
  )
};

export default UserMesg;
