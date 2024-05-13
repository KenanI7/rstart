import React, { useState } from "react";
import { FaUser, FaBook, FaComments, FaCog, FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { Link } from "react-router-dom";

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const [selectedItem, setSelectedItem] = useState("profile");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const toggleSidebarState = () => {
    setIsCollapsed(!isCollapsed);
    toggleSidebar(); // Call the toggleSidebar function passed from Dashboard
  };

  return (
    <div className={`sidebar p-4 flex flex-col justify-between fixed top-0 left-0 bottom-0 bg-blue-200 transition-all duration-300 ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}`} style={{ width: isCollapsed ? '60px' : '0%', minWidth: isCollapsed ? '60px' : '240px' }}>
      <div>
        <div className="profile-section mb-4">
          <div className="profile-image">
            <img src="./images" alt="Profile" /> 
          </div>
          {!isCollapsed && <div className="username">John Doe</div>}
        </div>
  
        <div className="menu">
          <Link to="/profile" className={`menu-item ${selectedItem === "profile" ? "active" : ""}`} onClick={() => handleItemClick("profile")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaUser className="mr-2" /> {!isCollapsed && "My Profile"}
            </div>
          </Link>
          <Link to="/lessons" className={`menu-item ${selectedItem === "lessons" ? "active" : ""}`} onClick={() => handleItemClick("lessons")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaBook className="mr-2" /> {!isCollapsed && "Lessons"}
            </div>
          </Link>
          <Link to="/free-conversation" className={`menu-item ${selectedItem === "free-conversation" ? "active" : ""}`} onClick={() => handleItemClick("free-conversation")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaComments className="mr-2" /> {!isCollapsed && "Free Conversation Lesson"}
            </div>
          </Link>
          <Link to="/vocabulary" className={`menu-item ${selectedItem === "vocabulary" ? "active" : ""}`} onClick={() => handleItemClick("vocabulary")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaComments className="mr-2" /> {!isCollapsed && "Vocabulary"}
            </div>
          </Link>
        </div>
      </div>
  
      <div className="flex justify-between">
        <Link to="/faq" className={`flex items-center py-2 px-3 rounded-lg hover:bg-blue-600 ${isCollapsed ? 'hidden' : ''}`}>
          FAQ
        </Link>
        <Link to="/settings" className={`flex items-center py-2 px-3 rounded-lg hover:bg-blue-600 ${isCollapsed ? 'hidden' : ''}`}>
          <FaCog className="mr-2" /> {!isCollapsed && "Settings"}
        </Link>
      </div>
      <button className="fixed top-1/2 right-0 transform -translate-y-1/2 mr-[-21px] -mr-2 bg-blue-400 p-2 rounded-full text-white" onClick={toggleSidebarState}>
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default Sidebar;
