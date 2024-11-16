import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import TextInput from './components/TextInput';
import ErrorMessage from './components/ErrorMessage';
import TransformButton from './components/TransformButton';
import DownloadButton from './components/DownloadButton';
import AudioPreview from './components/AudioPreview';

const App = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [processedAudio, setProcessedAudio] = useState(null);

  const handleTransform = async () => {
    if (!file || !text) {
      setError('Please provide both an audio file and text');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockAudioBlob = new Blob([file], { type: file.type });
      setProcessedAudio(URL.createObjectURL(mockAudioBlob));
    } catch (err) {
      setError('Error processing file: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Voice Transformation App</h1>
        <FileUpload file={file} setFile={setFile} setError={setError} />
        <TextInput text={text} setText={setText} setError={setError} />
        <ErrorMessage error={error} />
        <TransformButton handleTransform={handleTransform} isProcessing={isProcessing} file={file} text={text} />
        {processedAudio && !isProcessing && <DownloadButton processedAudio={processedAudio} file={file} />}
        {processedAudio && <AudioPreview processedAudio={processedAudio} file={file} />}
      </div>
    </div>
  );
};

export default App;
