import { motion } from "framer-motion";
// import SignUp from "../components/admin-pages/sign-Up";
// import SignIn from "../components/admin-pages/sign-in";
import AdminHeader from "../components/admin-pages/header";
import Sidebar from "../components/admin-pages/sidebar";

export default function AdminDashboard() {

    return (
        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
            <>
                <AdminHeader />
                <Sidebar />
            </>
        </motion.div>
    );
}