// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// interface HeaderProps {
//   isSidebarCollapsed: boolean; // Define the type of isSidebarCollapsed prop
// }

// const Header: React.FC<HeaderProps> = ({ isSidebarCollapsed }) => {
//   const [maxHeaderWidth, setMaxHeaderWidth] = useState<number>(0);

//   useEffect(() => {
//     const calculateMaxHeaderWidth = () => {
//       const screenWidth = window.innerWidth;
//       const sidebarWidth = isSidebarCollapsed ? 60 : 240; // Adjusted for collapsed and expanded sidebar widths
//       const remainingWidth = screenWidth - sidebarWidth;
//       const maxHeaderWidth = remainingWidth * 0.8; // 80% of the remaining width
//       setMaxHeaderWidth(maxHeaderWidth);
//     };

//     calculateMaxHeaderWidth();

//     const handleResize = () => {
//       calculateMaxHeaderWidth();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isSidebarCollapsed]);

//   return (
//     <header className="bg-blue-500 py-4 fixed top-0 left-0 w-full z-10" style={{ flex: '1', overflowX: 'auto', marginLeft: isSidebarCollapsed ? '0' : '60px', transition: 'margin-left 0.3s ease-in-out', minWidth: 'fit-content', width: '100%', maxWidth: `${maxHeaderWidth}px` }}>
//       <nav className="container mx-auto">
//         <ul className="flex justify-between items-center">
//           <li>
//             <Link to="/dashboard" className="text-white font-bold text-xl">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-white hover:text-gray-300 ml-4">About</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-white hover:text-gray-300 ml-4">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
