import { motion } from "framer-motion";
// import SignUp from "../components/admin-pages/sign-Up";
// import SignIn from "../components/admin-pages/sign-in";
import AdminHeader from "../components/admin-pages/header";
import Sidebar from "../components/admin-pages/sidebar";
import { CinematicBouncyText } from "../components/animations/text";


export default function AdminDashboard() {

    // const welcome = localStorage.getItem("name");

    return (
        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
            <>
                <AdminHeader />
                <div className="flex">
                    <Sidebar />
                    <div className="flex items-center justify-center w-full text-shadow-xl fixed top-52">
                        {/* <h4>{welcome}</h4> */}
                        
                        <CinematicBouncyText text="welcome_Admin" />;
                    </div>
                </div>
                
            </>
        </motion.div>
    );
}