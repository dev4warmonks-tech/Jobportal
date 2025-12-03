"use client";
import { useEffect, useState } from "react";
import { getUserRole } from "../../api/api";

export default function UserMenu({ user, profileImage }) {
  const [open, setOpen] = useState(false);
  const [userRoles, setUserRoles] = useState([]); // store all roles
  const [roleName, setRoleName] = useState(null);

  // Fetch role name from API
  useEffect(() => {
    getUserRole()
      .then((roles) => setUserRoles(roles))
      .catch((err) => console.error("Failed to fetch all roles:", err));
  }, []);

  useEffect(() => {
    if (!user?.user_role || userRoles.length === 0) return;

    const role = userRoles.find(r => r._id === user.user_role);
    setRoleName(role?.name || "user");
  }, [user, userRoles]);

  if (!user) {
    return (
      <div className="text-sm text-gray-600">
        <a href="/login">Login</a>
      </div>
    );
  }


  const profileUrl =
  roleName === "employer"
    ? "/employer/jobs"
    : ["admin", "super admin"].includes(roleName)
    ? "/master/jobs"
    : "/profilepages";


      
  return (
    <div className="relative">
      <div
        className="flex items-center space-x-3 px-5 py-2 rounded-full cursor-pointer hover:bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        <span>Hi, {user.firstName || user.email || "User"}</span>

        <img
          src={user.profileImage || profileImage || "/default-user.png"}
          className="w-10 h-10 rounded-full object-cover border-2 border-black"
        />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-[#E2F4FA] border rounded-xl shadow-lg py-2 z-50">
          <button
            onClick={() => (window.location.href = window.location.origin)}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            🏠 Home
          </button>


          <a href={profileUrl} className="block px-4 py-2 text-sm hover:bg-gray-100">
            👤 My Profile
          </a>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              sessionStorage.removeItem("user");
              window.location.href = "/";
            }}
            className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
          >
            🔓 Logout
          </button>
        </div>
      )}
    </div>
  );
}
