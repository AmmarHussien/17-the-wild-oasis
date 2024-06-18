import { useEffect, useRef, useState } from "react";

function DropDownMenu({ options, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={styles.container} ref={dropdownRef}>
      <label style={styles.label}>{selectedOption || title}</label>
      <span style={styles.icon} onClick={handleIconClick}>
        ▼
      </span>
      {isOpen && (
        <ul style={styles.options}>
          {options.map((option) => (
            <li
              key={option}
              style={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
    cursor: "pointer",
    height: "56px",
    padding: "8px 16px 8px 16px",
    gap: "16px",
    borderRadius: "16px",
    border: "1px solid var(--color-grey-300)",
    backgroundColor: "#f7f8fa",
  },
  label: {
    color: "#666",
    fontSize: "16px",
  },
  icon: {
    fontSize: "24px",
  },
  options: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "5px",
    zIndex: 1001,
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  option: {
    padding: "10px",
    cursor: "pointer",
  },
};

export default DropDownMenu;
