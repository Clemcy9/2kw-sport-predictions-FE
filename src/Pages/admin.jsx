import { motion } from "framer-motion";
// import SignUp from "../components/admin-pages/sign-Up";
// import SignIn from "../components/admin-pages/sign-in";
import AdminHeader from "../components/admin-pages/header";
import Sidebar from "../components/admin-pages/sidebar";
import { CinematicBouncyText } from "../components/animations/text";


export default function AdminDashboard() {

    const welcome = localStorage.getItem("name");

    return (
        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
            <>
                <AdminHeader />
                <div className="lg:grid lg:grid-cols-[0.8fr_3fr] sm:grid sm:grid-cols-[1fr_2fr]">
                    <div>
                        <Sidebar />
                    </div>
                    
                    <div className="hidden sm:flex sm:items-center sm:justify-center text-shadow-xl ">

                        <CinematicBouncyText text={`Welcome ${welcome}`} />

                    </div>
                   
                </div>
                
            </>
        </motion.div>
    );
}