import { motion } from "framer-motion";
import AdminHeader from "../components/admin-pages/header";
import Sidebar from "../components/admin-pages/sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function AdminDashboard() {

    useEffect(() => {
           window.history.pushState(null, "", window.location.href);
           window.addEventListener("popstate", () => {
               window.history.pushState(null, "", window.location.href);
           });
       }, []);

    return (
        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
            
                <div className="min-h-screen">
                    <AdminHeader />
                    <div className="lg:grid lg:grid-cols-[0.8fr_3fr] ">
                        
                            <Sidebar className="sticky top-0 "/>
                       

                        <main className="overflow-y-auto lg:max-h-screen">
                            <Outlet />
                        </main>
                    </div>
                </div>
        </motion.div>
    );
}