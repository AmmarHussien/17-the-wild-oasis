import { useState } from "react";

function FileInput({ placeholder, icon }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "327px",
      height: "56px",
      padding: "8px 16px 8px 16px",
      gap: "16px",
      borderRadius: "16px",
      border: "1px solid var(--color-grey-300)",
      opacity: "0px",
      backgroundColor: "#f7f8fa",
    },
    label: {
      color: "#666",
      fontSize: "16px",
    },
    fileInput: {
      display: "none",
    },
    icon: {
      cursor: "pointer",
      fontSize: "24px",
    },
  };

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="user-photo" style={styles.label}>
        {fileName || placeholder}
      </label>
      <input
        type="file"
        id="user-photo"
        accept="image/*"
        style={styles.fileInput}
        onChange={handleFileChange}
      />
      <span style={styles.icon}>{icon}</span>
    </div>
  );
}

export default FileInput;
