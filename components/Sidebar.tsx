import { setUser, setMenu, setToken, setSelectedComponent } from '@/redux/reducer';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  FaBars } from 'react-icons/fa';

const Sidebar = () => {
    const router = useRouter();

    //Store
    const dispatch = useDispatch();

    const setUserSession = (user: any) => {
        dispatch(setUser(user));
    };
    const setMenuSession = (menu: any) => {
        dispatch(setMenu(menu));
    };
    const setTokenSession = (token: any) => {
        dispatch(setToken(token));
    };
    const setSelectedComponentMenu= (token: any) => {
        dispatch(setSelectedComponent(token));
    };

    const menu = useSelector((state: any) => state.app.client.menuUser);
    const user = useSelector((state: any) => state.app.client.sessionUser);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const renderMenuItems = (items: any) => {
        return items.map((item: any) => (
            <div key={item.name} className="py-2">
                <div
                    className="flex items-center text-gray-800"
                    style={{ paddingLeft: !item.icon ? '20px' : '0' }}
                    onClick={() => handleMenuItemClick(item.link)}
                    role="button"
                >
                    {item.icon && (
                        <span className="mr-2">
                            {/* <img src={item.icon} alt={item.name} className="w-4 h-4" /> */}
                            <FaBars></FaBars>
                        </span>
                    )}
                    {item.name}
                </div>
                {item.submenu && item.submenu.length > 0 && (
                    <div className="ml-4">{renderMenuItems(item.submenu)}</div>
                )}
            </div>
        ));
    };

    const handleMenuItemClick = (menuUrl: any) => {
        setSelectedComponentMenu(menuUrl);
    };

    const tagUserType = (userType: string) => {
        if (userType === "USER") {
            return "Usuario";
        } else if (userType === "ADMIN") {
            return "Administrador";
        } else if (userType === "OWNER") {
            return "Propietario";
        }
        return "";
    };

    const handleLogout = () => {
        setUserSession({});
        setTokenSession("");
        setMenuSession({});
    }

    const userTag = tagUserType(user?.user_type || "");

    return (
        <div className="flex h-screen">
            <aside className={`bg-white text-gray-800 w-64 flex flex-col shadow-md ${isSidebarOpen ? 'block' : 'hidden'
                } md:block`}
                style={{
                    position: 'fixed',
                    height: '100vh',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: 1000,
                }}>

                {/* Styled text logo */}
                <div className="pb-2 pt-4 px-4 font-bold text-2xl text-blue-600">
                    My<span className="text-gray-600 ml-2">App</span>
                </div>

                <div className="pb-2 pt-4 px-4 flex items-start">
                    {/* Avatar column */}
                    <div className="flex-shrink-0 mr-4">
                        <img
                            // src={sessionUser.avatar}
                            src="https://randomuser.me/api/portraits/men/11.jpg"
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                    {/* User info column */}
                    <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-semibold">{user?.name} {user?.last_name}</p>
                                <p className="text-gray-500">{user?.type}</p>
                            </div>
                            <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                Logout
                            </button>
                        </div>
                        {/* User additional info */}
                        <div className="mt-2 flex items-center">
                            <p>{user?.name}</p>
                            <p className="ml-4">{userTag}</p>
                        </div>
                    </div>
                </div>


                {/* Sidebar menu */}
                <div className="p-4 border-r border-gray-300 h-full">
                    <div>
                        {menu && menu.length > 0 && renderMenuItems(menu)}
                    </div>
                </div>
            </aside>
        </div >
    );
};

export default Sidebar;
