import React from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const FileUpload = ({ file, setFile, setError }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError('');

    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('File size must be less than 5MB');
      return;
    }

    if (!selectedFile.type.startsWith('audio/')) {
      setError('Please upload an audio file');
      return;
    }

    setFile(selectedFile);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Upload Voice File</label>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="w-full p-2 border rounded-md"
      />
      <p className="text-sm text-gray-500 mt-1">Maximum file size: 5MB</p>
    </div>
  );
};

export default FileUpload;
