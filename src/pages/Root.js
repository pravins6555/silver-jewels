import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


function Root(){
    return (
    <>
        <Navbar />
        <main >
            <Outlet />
        </main>
        
        </>
    )
    
}
export default Root;