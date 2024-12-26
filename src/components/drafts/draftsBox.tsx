import { Button } from "../ui/button";
import { Card,CardTitle } from "../ui/card";
import Download from "@/assets/icons/Download";

const draftsData = Array.from({length : 20},()=>{
    return {
        title : '561-A CRPC (Against Order)'
    }
})


export function DraftsBox(){
    return(
        <div className="grid grid-row sm:grid-cols-4 gap-4 mt-4">
        {draftsData.map((drafts, index) => (
            <Card className="bg-transparent p-2" key={index}>
            <CardTitle className="text-sm">{drafts.title}</CardTitle>
            <hr className="my-2" />
            <Button className="w-full gap-2 text-[8px] h-0 py-3"> <Download/>Download PDF</Button>
        </Card>
        ))}
    </div>
    )
}