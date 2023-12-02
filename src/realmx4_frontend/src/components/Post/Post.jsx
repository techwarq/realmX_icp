import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { realmx4_backend } from "../../../../declarations/realmx4_backend";


const Post = () => {
  const [questionText, setQuestionText] = useState('');
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      getBase64(file, (idCardBase64) => {
        try {
          // Save the file using realmx4_backend
          realmx4_backend.saveFile(uuidv4(), idCardBase64);

          // Update the list of uploaded files
          setUploadedFiles((prevFiles) => [...prevFiles, file]);

          alert("File Upload Successfully");
        } catch (error) {
          alert(error.message || "Error saving file");
        }
      });
    }
  };
 
  const handlePostQuestion = async () => {
    try {
      
      await realmx4_backend.addQuestion(uuidv4(), questionText);
      alert("Question Posted Successfully");
      
    } catch (error) {
      alert(error.message || "Error posting question");
    }
  };

  const handleFileClick = async (uuid) => {
    try {
      const response = await realmx4_backend.getFile(uuid);
  
      if (response.status) {
        // Assuming you want to open the file content in a new window
        const newWindow = window.open();
        newWindow.document.write(`<pre>${response.data}</pre>`);
      } else {
        console.error('Error fetching file:', response.data);
      }
    } catch (error) {
      console.error('Error handling file click:', error);
    }
  };

  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        const filesData = await realmx4_backend.getAllFiles();
        const files = filesData.data.map(([uuid, name]) => ({ uuid, name }));
        setUploadedFiles(files);
      } catch (error) {
        console.error('Error fetching uploaded files', error);
      }
    };

    fetchUploadedFiles();
  }, []);

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div className=" max-w-6xl mx-auto min-h-screen mt-10">
      <h1 className=" text-center text-5xl text-fuchsia-700 mb-6 ">Post a Question</h1>
      
      <form>   
    <label for="search" className="mb-4 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        
        <input type="search" id="search" value={questionText}
          onChange={(e) => setQuestionText(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        <button type="submit" onClick={handlePostQuestion} className="text-white absolute right-4 bottom-4.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Post</button>

       
    </div>

    {uploadedFiles.length > 0 && (
          <div className="mt-10">
            <h4 className="text-3xl text-gray-400 mb-5">Uploaded Files:</h4>
            <ul className="text-white">
              {uploadedFiles.map((uploadedFile, index) => (
                <li key={index}>
                  <button onClick={() => handleFileClick(uploadedFile.uuid)} className="underline cursor-pointer">
                    {uploadedFile.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
</form>
      

      
    </div>
  );
};

export default Post;