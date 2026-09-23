import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ChevronRight } from "@carbon/icons-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path?: string;
  badge?: number;
  children?: MenuItem[];
}

interface SidebarProps {
  items: MenuItem[];
  logo?: React.ReactNode;
  collapsed?: boolean;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function Sidebar({ items, logo, collapsed: controlledCollapsed }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(controlledCollapsed ?? false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (isMobile) setCollapsed(true);
  }, [isMobile]);

  const handleNav = (path?: string) => {
    if (path) {
      navigate(path);
      if (isMobile) setCollapsed(true);
    }
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  if (isMobile) {
    return (
      <nav className="bottom-nav" role="navigation" aria-label="Menu principal">
        {items.slice(0, 5).map((item) => (
          <button
            key={item.label}
            className={`bottom-nav-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => handleNav(item.path)}
            aria-label={item.label}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
            {item.badge && item.badge > 0 && (
              <span className="bottom-nav-badge">{item.badge > 99 ? "99+" : item.badge}</span>
            )}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <>
      <AnimatePresence>
        {!collapsed && isMobile && (
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCollapsed(true)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`sidebar ${collapsed ? "collapsed" : ""}`}
        initial={false}
        animate={{ width: collapsed ? 64 : 240 }}
        transition={{ duration: 0.2 }}
      >
        <div className="sidebar-header">
          <button
            className="sidebar-toggle"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          >
            <Menu size={20} />
          </button>
          {!collapsed && logo && <div className="sidebar-logo">{logo}</div>}
        </div>

        <nav className="sidebar-nav" role="navigation" aria-label="Menu lateral">
          {items.map((item) => (
            <div key={item.label} className="sidebar-item-wrapper">
              {item.children ? (
                <>
                  <button
                    className={`sidebar-item has-children ${openSubmenu === item.label ? "open" : ""}`}
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    <span className="sidebar-icon">{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="sidebar-label">{item.label}</span>
                        <span className="sidebar-arrow">
                          {openSubmenu === item.label ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </span>
                      </>
                    )}
                  </button>
                  <AnimatePresence>
                    {openSubmenu === item.label && !collapsed && (
                      <motion.div
                        className="sidebar-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            className={`sidebar-item subitem ${location.pathname === child.path ? "active" : ""}`}
                            onClick={() => handleNav(child.path)}
                          >
                            <span className="sidebar-label">{child.label}</span>
                            {child.badge && child.badge > 0 && (
                              <span className="sidebar-badge">{child.badge}</span>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <button
                  className={`sidebar-item ${location.pathname === item.path ? "active" : ""}`}
                  onClick={() => handleNav(item.path)}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  {!collapsed && <span className="sidebar-label">{item.label}</span>}
                  {!collapsed && item.badge && item.badge > 0 && (
                    <span className="sidebar-badge">{item.badge}</span>
                  )}
                </button>
              )}
            </div>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}
