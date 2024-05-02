import { useNavigate } from "react-router-dom" ;
import { Button } from "../components/Button";
export const Landing =() =>{
    const navigate= useNavigate();
    return <div className="flex justify-center">
                <div className="pt-8 max-w-screen-lg">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex justify-center">
                             <img src={"/cboard.jpg"} className="max-w-108"></img>
                        </div>
                        <div className="pt-10">
                            <div className="flex-justify-center">
                                <h1 className="text-4xl font-bold text-white whitespace-nowrap">"Welcome to soon to be #1 Chess site"</h1>
                            </div>
                            <div className="pt-12 mt -8 flex justify-center">
                                <Button onClick={()=>{
                                    navigate ("/game")
                                }} className="px-8 py-4 text-2xl bg-green-500 hover:bg-orange-700 text-white font-bold rounded">
                                    Play online 
                                </Button>
                            </div>
                        </div>
                    </div> 
                 </div>   
         </div>
}