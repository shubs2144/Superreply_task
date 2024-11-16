import React from 'react';

const AudioPreview = ({ processedAudio, file }) => {
  return (
    processedAudio && (
      <div>
        <label className="block text-sm font-medium mb-2">Preview</label>
        <audio controls className="w-full">
          <source src={processedAudio} type={file.type} />
          Your browser does not support the audio element.
        </audio>
      </div>
    )
  );
};

export default AudioPreview;
