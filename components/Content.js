// components/Dashboard.js
import { useState } from 'react';

const Content = () =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState({});

    const toggleDropdown = (index) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="p-6  w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200  transition-all main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {[
                    { count: 2, label: "Users", link: "/gebruikers" },
                    { count: 100, label: "Companies", link: "/dierenartsen", percentage: "+30%" },
                    { count: 100, label: "Blogs", link: "#" }
                ].map((item, index) => (
                    <div key={index} className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                        <div className="flex justify-between mb-6">
                            <div>
                                <div className="flex items-center mb-1">
                                    <div className="text-2xl font-semibold">{item.count}</div>
                                    {item.percentage && (
                                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">{item.percentage}</div>
                                    )}
                                </div>
                                <div className="text-sm font-medium text-gray-400">{item.label}</div>
                            </div>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => toggleDropdown(index)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <i className="ri-more-fill"></i>
                                </button>
                                {isDropdownOpen[index] && (
                                    <ul className="absolute right-0 shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                        {["Profile", "Settings", "Logout"].map((option, idx) => (
                                            <li key={idx}>
                                                <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">
                                                    {option}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <a href={item.link} className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                    </div>
                ))}
            </div>

            <div className="flex ">
                <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                    <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative  flex-grow flex-1">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Users</h3>
                            </div>
                        </div>
                        <div className="block  overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Role</th>
                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Amount</th>
                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { role: "Administrator", amount: 1, percentage: 70, color: "blue" },
                                        { role: "User", amount: 6, percentage: 40, color: "blue" },
                                        { role: "User", amount: 5, percentage: 45, color: "pink" },
                                        { role: "User", amount: 4, percentage: 60, color: "red" }
                                    ].map((user, idx) => (
                                        <tr key={idx} className="text-gray-700 dark:text-gray-100">
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{user.role}</th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{user.amount}</td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">{user.percentage}%</span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                            <div style={{ width: `${user.percentage}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${user.color}-600`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md  ">
                    <div className="font-medium">Activities</div>  
                        <div className="block w-full overflow-x-auto">
                            <table >
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">Lorem Ipsum</a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                        </td>
                           
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">Lorem Ipsum</a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Content