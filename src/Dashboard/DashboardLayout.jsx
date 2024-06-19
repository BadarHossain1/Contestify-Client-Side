
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';


const DashboardLayout = () => {
    return (
        <div>
            <div className='relative min-h-screen md:flex'>
                {/* Sidebar */}
                <Dashboard></Dashboard>

                {/* Outlet --> Dynamic content */}
                <div className='flex-1 md:ml-64 bg-white text-black'>
                    <div className='p-5'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;