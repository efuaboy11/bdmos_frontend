import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const DownloadLink = ({ url, fileName }) => {
  const { authTokens, setLoadingModal } = useContext(AuthContext);

  const handleDownload = () => {
    setLoadingModal(true)
    fetch(url, {
      headers: {
        Authorization: `Bearer ${authTokens.access}`, // Add your authorization header here
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = fileName || "downloaded-file.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(fileURL);
        setLoadingModal(false)
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
        setLoadingModal(false)
    });
  };

  return (
    <button className="scheme-download-link" type="button" onClick={handleDownload}>
      Download
    </button>
  );
};
