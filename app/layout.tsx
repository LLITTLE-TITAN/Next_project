import React, { ReactNode } from "react";
// import Theme from "../path/themeContext";
 
interface LayoutProps {
  children: ReactNode;
  // Add any other props for the Layout component here
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body>
     
        {children}
       
        {/* <Theme>{children}</Theme> */}
      
      </body>
    </html>
  );
};

export default Layout;