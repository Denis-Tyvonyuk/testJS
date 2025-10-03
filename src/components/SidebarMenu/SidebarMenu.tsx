import { useState } from "react";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null); // Changed to track which item is open

  const menuItems = [
    { label: "Home", path: "#home" },
    { label: "Settings", path: "#settings" },
    { label: "Profile", path: "#profile" },
  ];

  const toggleItem = (index: any) => {
    setOpenItem(openItem === index ? null : index); // Toggle specific item
  };

  return (
    <div className="container">
      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "show" : "hide"}`}>
        <button
          onClick={() => setOpen(true)}
          className={`menu-button ${open ? "hidden" : ""}`}
        >
          Menu
        </button>
        <div className="sidebar-content">
          {/* Sidebar Header */}
          <div className="header">
            <h2 className="title">Menu</h2>
          </div>

          {/* Sidebar Content */}
          <nav className="nav">
            <ul className="ul">
              {menuItems.map((item, index) => (
                <li key={index} className="li">
                  <div
                    className="accordion-head"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="accordion-label">{item.label}</div>
                    <div
                      className={`accordion-arrow ${
                        openItem === index ? "open" : ""
                      }`}
                    >
                      ▼
                    </div>
                  </div>

                  {/* Accordion content that shows only for the open item */}
                  {openItem === index && (
                    <div className="accordion-content">
                      <div className="Items">
                        <div className="single-item">
                          <div>First</div>
                        </div>
                        <div className="single-item">Second</div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
