import Header from "@/features/Header/Header";
import {Outlet} from 'react-router-dom'


function MainLayout(){
    return(
        <>
        <Header/>
        <main className="">
            <Outlet/>
        </main>
        </>
    )
}

export default MainLayout;