import React, { useState } from 'react';
import Sidebar from '../components/meni';
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentContent, setCurrentContent] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleContentChange = (content: string) => {
    setCurrentContent(content);
  };

  

  // Calculate the dynamic width for the header based on the sidebar state
  const headerWidth = isSidebarCollapsed ? '100%' : 'calc(100% - 240px)';

  // Calculate the dynamic margin-left for the main content based on the sidebar state
  const mainContentMarginLeft = isSidebarCollapsed ? '0' : '240px';

  // Calculate the dynamic margin-left for the header based on the sidebar state
  const headerMarginLeft = isSidebarCollapsed ? '0' : '240px';

  let contentComponent;
  switch (currentContent) {
    case 'dashboard':
      contentComponent = <DashboardContent />;
      break;
    case 'content1':
      contentComponent = <Content1 />;
      break;
    case 'content2':
      contentComponent = <Content2 />;
      break;
    // Add cases for additional content views
    default:
      contentComponent = <DashboardContent />;
      break;
  }

  return (
    <div className="dashboard" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <header className="bg-blue-500 py-4 fixed top-0 left-0 z-10" style={{ width: headerWidth, marginLeft: headerMarginLeft, transition: 'width 0.3s ease-in-out, margin-left 0.3s ease-in-out' }}>
        <nav className="container mx-auto">
          <ul className="flex justify-between items-center">
            <li>
              <button onClick={() => handleContentChange('dashboard')} className="text-white font-bold text-xl">Dashboard</button>
            </li>
            <li>
              <button onClick={() => handleContentChange('content1')} className="text-white hover:text-gray-300 ml-4">Content 1</button>
            </li>
            <li>
              <button onClick={() => handleContentChange('content2')} className="text-white hover:text-gray-300 ml-4">Content 2</button>
            </li>
            {/* Add more buttons for additional content views */}
          </ul>
        </nav>
      </header>
      {/* Dashboard Content */}
      <div className="dashboard-content" style={{ display: 'flex', flex: '1', marginTop: '64px' }}>
        <Sidebar toggleSidebar={toggleSidebar} />
        <div className="main-content" style={{ flex: '1', overflowX: 'auto', marginLeft: mainContentMarginLeft, transition: 'margin-left 0.3s ease-in-out' }}>
          {contentComponent}
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return <h1>Welcome to the Dashboard!</h1>;
};

const Content1 = () => {
  return <h1>Content 1</h1>;
};

const Content2 = () => {
  return <h1>Content 2</h1>;
};

export default Dashboard;
