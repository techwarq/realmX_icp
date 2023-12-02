import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdCancel } from "react-icons/md";
import Confetti from 'react-confetti';


import { realmx4_backend } from "../../../../declarations/realmx4_backend";



const Challenges = () => {
    
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [confetti, setConfetti] = useState(false); // State for confetti


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    let idCardBase64 = "";
    getBase64(selectedFile, (result) => {
      idCardBase64 = result;
      console.log("idCardBase64", idCardBase64);
      handleSaveFile(idCardBase64);
      setData(idCardBase64);
    });
  };

  function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log("reader", reader);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleUpload = () => {
    if (file) {
      let idCardBase64 = "";
      getBase64(file, (result) => {
        idCardBase64 = result;
      });
    }
    setConfetti(true);

      setTimeout(() => {
        // Reset confetti state after a delay
        setConfetti(false);
      }, 5000);
  };

  function handleSaveFile(idCardBase64) {
    try {
      let response = realmx4_backend.saveFile(uuidv4(), idCardBase64);
      if (response) {
        alert("Upload Successfully");
      }
    } catch (error) {
      alert(error);
    }
  }



  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
     
      const response = await realmx4_backend.getAllQuestions();
      if (response.status && response.data) {
        setQuestions(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await realmx4_backend.deleteQuestion(id);
      if (response.status) {
        alert("Question deleted successfully");
        fetchQuestions(); // Refresh the questions after successful deletion
      }
    } catch (error) {
      alert(error);
    }
  };
 

  return (
    <div className="flex justify-center">


<div class="relative overflow-x-auto mt-40">
{confetti && <Confetti />}
  <h1 className="mt-34 text-5xl text-fuchsia-700 text-center mb-8">Challenges</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                Serial
              </th>
                <th scope="col" class="px-6 py-3">
                   Problem Statement
                </th>
                <th scope="col" class="px-6 py-3">
                    Tech Stack
                </th>
                <th scope="col" class="px-6 py-3">
                    Upload
                </th>
                <th scope="col" class="px-6 py-3">
                    Tokens
                </th>
                
            </tr>
        </thead>
        <tbody>
            {questions.map((question, index) => (
              <tr className="bg-gray-700 border-b dark:bg-gray-800 dark:border-gray-700 h-14" key={index}>
                <td className="px-6 py-4">{index + 1}   <button
                    className="text-red-500"
                    onClick={() => handleDelete(question[0])}
                  >
                   <MdCancel />
                   
                  </button></td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {question[1]} 
                </td>
              <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                    <div className="upload-section">
                          <input type="file" onChange={handleFileChange} />
                           <button
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-4.5 me-4 mb-4 ark:bdg-gray-800 dark:text-gray-800 "
                                 onClick={handleUpload}
                                                  >
                                Upload
                            </button>
                    </div>
                </td>
                <td>
                  <img src="https://drive.google.com/uc?export=view&id=1-YjbRI5pVCVFyfeZIShqrYRvN_eIXfSR" className=" w-14"/>
                </td>
               
              </tr>
            ))}
          </tbody>
    </table>
</div>

     
    </div>
  );
};

export default Challenges;