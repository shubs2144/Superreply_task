import React from 'react';

const DownloadButton = ({ processedAudio, file }) => {
  const handleDownload = () => {
    if (processedAudio) {
      const link = document.createElement('a');
      link.href = processedAudio;
      link.download = `transformed-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full py-2 px-4 rounded-md border border-gray-300 
        text-gray-700 font-medium hover:bg-gray-50"
    >
      Download Transformed Voice
    </button>
  );
};

export default DownloadButton;
