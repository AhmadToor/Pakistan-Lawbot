import Download from "@/assets/icons/Download";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";

const statusesData = Array.from({length : 12}, ()=>{return {    
        title: 'Access to the Media (Deaf) Persons Act, 2022',
        content : 'General Laws  •  XL of 2022  •  Promulgation Date: 30 Dec, 2024'
    }})
export function StatusesBox() {
    return (
        <div className="grid grid-row sm:grid-cols-3 gap-4 mt-4">
            {statusesData.map((status,index)=>(
            <Card className="bg-transparent p-2" key={index}>
                <CardTitle className="text-sm">{status.title}</CardTitle>
                <CardDescription className="text-[10px] mt-1">{status.content}</CardDescription>
                <hr className="my-2" />
                <Button className="w-full gap-2 text-[8px] h-0 py-3"> <Download/>Download PDF</Button>
            </Card>

            ))}
    </div>
)}