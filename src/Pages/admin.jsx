import { motion } from "framer-motion";
import AdminHeader from "../components/admin-pages/layout/header";
import Sidebar from "../components/admin-pages/layout/sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function AdminLayout() {

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
                    <div className=" lg:grid lg:grid-cols-[0.8fr_3fr] ">
                        
                            <Sidebar className=" sticky top-0 bottom-0"/>
                       

                        <main className="overflow-y-auto max-h-screen">
                            <Outlet />
                        </main>
                    </div>
                </div>
        </motion.div>
    );
}