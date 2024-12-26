import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const judgementData = Array.from({length : 4}, ()=>{return {
    citation: "1999 SCMR 1881",
    statutes: "Constitution of Pakistan (1973) - Art. 199",
    judges: ["Raja Afrasiab Khan", "Wajihuddin Ahmed"],
    date: "1999-06-01"
}}) 

export function JudgementBox() {
    return (
        <div className="grid grid-row gap-4 mt-4">
            {judgementData.map((judgement, index) => (
                <Card key={index} className="p-2 border-transparent shadow-none">
                    <CardHeader className="flex justify-between flex-row items-baseline p-0 ">
                        <CardTitle className="font-bold text-sm">{judgement.citation}</CardTitle>
                        <Button className="text-[10px] rounded-full py-2  h-max">View Details</Button>
                    </CardHeader>
                    <hr className="my-2" />
                    <CardContent className="grid grid-row sm:grid-cols-3 gap-8 p-0">
                        <div>
                            <p className="text-xs"><strong>Citation:</strong> {judgement.citation}</p>
                            <p className="mt-1 text-xs"><strong>Statutes:</strong> {judgement.statutes}</p>
                        </div>
                        <div className="my-1 text-xs"><strong>Judges:</strong>
                            <ul className="my-auto">
                                {judgement.judges.map((judge, judgeIndex) => (
                                    <li key={judgeIndex + 1000}>&#9679; {judge}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="my-1">
                            <p className="md:text-end text-xs"><strong>Date:</strong> {judgement.date}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}