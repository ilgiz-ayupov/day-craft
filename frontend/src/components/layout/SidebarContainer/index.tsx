import {
  IoCalendarOutline,
  IoStarOutline,
  IoTimeOutline,
  IoCheckmarkDone,
} from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";

const SidebarContainer = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed top-0 left-0 h-full bg-white shadow-sm z-40 transition-all duration-300 ease-in-out overflow-y-auto w-64">
        <div className="h-full flex flex-col">
          <div className="p-4 flex items-center justify-between ">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src="../../assets/user.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2"
                />
              </div>
              <div className="ml-2 text-gray-500">
                <p className="text-sm">Приветствуем, User</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-500">
              <button className="hover:text-gray-700">
                <div className="w-5 h-5 mb-[-2px]">
                  <IoMdSettings />
                </div>
              </button>
              <button className="hover:text-gray-700">
                <div className="w-5 h-5 mr-2 mb-[-2px]">
                  <IoMdNotificationsOutline />
                </div>
              </button>
            </div>
          </div>

          <div className="px-4 mb-6 border-y border-gray-200 py-7">
            <ul className="space-y-3">
              <li>
                <button className="flex items-center text-gray-500 hover:text-gray-700 w-full">
                  <div className="w-5 h-5 mr-2 mb-[-2px]">
                    <IoCalendarOutline />
                  </div>

                  <span>На сегодня</span>
                </button>
              </li>
              <li>
                <button className="flex items-center text-gray-500 hover:text-gray-700 w-full">
                  <div className="w-5 h-5 mr-2 mb-[-2px]">
                    <IoStarOutline />
                  </div>

                  <span>Важные</span>
                </button>
              </li>
              <li>
                <button className="flex items-center text-gray-500 hover:text-gray-700 w-full">
                  <div className="w-5 h-5 mr-2 mb-[-2px]">
                    <IoTimeOutline />
                  </div>

                  <span>Статистика</span>
                </button>
              </li>
              <li>
                <button className="flex items-center text-gray-500 hover:text-gray-700 w-full">
                  <div className="w-5 h-5 mr-2 mb-[-2px]">
                    <IoCheckmarkDone />
                  </div>

                  <span>Выполненные</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="px-4 mb-6 border-y border-gray-200 py-7">
            <p className="text-xs text-gray-400 mb-3">Папки</p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <span className="w-5 h-5 mr-2 rounded-full bg-green-400 flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Жизнь</span>
                </button>
                <span className="bg-green-400 text-white text-xs px-2 py-0.5 rounded">
                  2
                </span>
              </li>
              <li className="flex items-center justify-between">
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <span className="w-5 h-5 mr-2 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Работа</span>
                </button>
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                  3
                </span>
              </li>
              <li className="flex items-center justify-between">
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <span className="w-5 h-5 mr-2 rounded-full bg-cyan-400 flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Финансы</span>
                </button>
                <span className="bg-cyan-400 text-white text-xs px-2 py-0.5 rounded">
                  4
                </span>
              </li>
              <li>
                <button className="flex items-center text-gray-500 hover:text-gray-700 mt-2">
                  <span className="w-5 h-5 mr-2 text-gray-400 flex items-center justify-center">
                    <div className="w-5 h-5 mr-2 mb-[-2px]">
                      <AiOutlinePlus />
                    </div>
                  </span>
                  <span className="text-gray-400">Создать новую папку</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
