import React, { useState } from 'react';
   import './App.css';

   function App() {
     const [selectedFile, setSelectedFile] = useState(null);
     const [uploadStatus, setUploadStatus] = useState('');

     const handleFileChange = (event) => {
       setSelectedFile(event.target.files[0]);
     };

     const handleFileUpload = () => {
       if (!selectedFile) {
         setUploadStatus('Please select a file to upload.');
         return;
       }
       setUploadStatus(`Uploading ${selectedFile.name}...`);
       // Here you can add the code to send the file to the backend for processing.
       // For now, we'll just simulate a successful upload.
       setTimeout(() => {
         setUploadStatus(`File ${selectedFile.name} uploaded successfully!`);
       }, 2000);
     };

     return (
       <div className="App">
         <header className="App-header">
           <h1>Flow Cytometry Analysis Tool</h1>
           <input type="file" onChange={handleFileChange} />
           <button onClick={handleFileUpload}>Upload File</button>
           <p>{uploadStatus}</p>
         </header>
       </div>
     );
   }

   export default App;
