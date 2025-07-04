import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calculator,
  Search,
  FileText,
  CreditCard,
  RefreshCw,
  Edit,
  BarChart3,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "EMI Calculator", path: "/emi-calculator", icon: Calculator },
  { name: "Search", path: "/search", icon: Search },
  { name: "Entries", path: "/entries", icon: FileText },
  { name: "Transactions", path: "/transactions", icon: CreditCard },
  { name: "Updates", path: "/updates", icon: RefreshCw },
  { name: "Edits", path: "/edits", icon: Edit },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Setup", path: "/setup", icon: Settings },
  { name: "Accounts", path: "/accounts", icon: Users },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white h-screen shadow-sm border-r border-gray-200 flex flex-col hidden lg:flex">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="text-xl font-bold text-gray-900">FYNEAUTO</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.path === "/search" &&
                location.pathname.startsWith("/search"));

            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
                {item.name === "Reports" && (
                  <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                {item.name === "Setup" && (
                  <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                {item.name === "Accounts" && (
                  <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Settings and Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-1">
          <Link
            to="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
