import { motion } from "framer-motion";
import AdminHeader from "../components/admin-pages/header";
import Sidebar from "../components/admin-pages/sidebar";
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";

export default function AdminDashboard() {

   

    return (
        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
            <>
                <AdminHeader />
                <div className=" lg:grid lg:grid-cols-[0.8fr_3fr] sm:grid sm:grid-cols-[1fr_2fr]">
                    <aside className="">
                        <Sidebar />
                    </aside>
                   
                    <main>
                        <Outlet />
                    </main>
                   
                </div>
                
            </>
        </motion.div>
    );
}