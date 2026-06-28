// import Header from "@/features/Header/Header";
import {Outlet} from 'react-router-dom'


function MainLayout(){
    return(
        <>
        {/* Header Will be added later */}
        {/* <Header/> */}
        <main className="">
            <Outlet/>
        </main>
        </>
    )
}

export default MainLayout;