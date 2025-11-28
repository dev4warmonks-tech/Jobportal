import Sidebar from "../components/mastersidebar/Sidebar";

export default function MasterLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        {children}
      </div>
    </div>
  );
}
