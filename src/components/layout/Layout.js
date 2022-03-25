import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {

  return (
    <div style={{display:'flex', flexDirection:'column', }}>
      <div>
        <Navbar />
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{ width: 180 }}>
          <Sidebar  />
        </div>
        <main style={{width: '90%'}}>
          {children}
        </main>
      </div>
    </div>
  )
}
export default Layout;