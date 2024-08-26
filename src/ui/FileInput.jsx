import { useState } from "react";

function FileInput({ placeholder, id, onFileChange }) {
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
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    label: {
      color: "#666",
      fontSize: "16px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    fileInput: {
      display: "none",
    },
    icon: {
      cursor: "pointer",
      fontSize: "18px",
    },
  };

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    if (file) {
      setFileName(file.name);
      if (onFileChange) {
        onFileChange(file); // Pass the file object to the parent component
      }
    }
  };

  const handleDelete = () => {
    setFileName("");
    if (onFileChange) {
      onFileChange(null); // Pass null to the parent component to indicate file removal
    }
    document.getElementById(id).value = null; // Reset the file input
  };

  return (
    <div style={styles.container}>
      <label htmlFor={id} style={styles.label}>
        {fileName || placeholder || id}
      </label>
      <input
        type="file"
        id={id}
        accept=".webp, .jpeg, .png, .jpg, .pdf, .doc, .docx, .mp4"
        style={styles.fileInput}
        onChange={handleFileChange}
      />
      {fileName ? (
        <span style={styles.icon} onClick={handleDelete}>
          ✖
        </span>
      ) : (
        <span
          style={styles.icon}
          onClick={() => document.getElementById(id).click()}
        >
          🔗
        </span>
      )}
    </div>
  );
}

export default FileInput;
