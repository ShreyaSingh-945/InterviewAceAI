import { useState } from "react";
import axios from "axios";
import PageHeader from "../../components/shared/PageHeader";
import SectionCard from "../../components/shared/SectionCard";
import FileDropzone from "../../components/ui/FileDropzone";
import { useEffect } from "react";
import ResumeCard from "../../components/shared/ResumeCard";

function ResumeAnalyzer() {
  const [selectedFile,setSelectedFile]=useState(null);
  const [resumes,setResumes]=useState([]);

  const fetchResumes=async()=>{
  try{
    const res=await axios.get("https://interviewaceai-rpmo.onrender.com/api/resume/list");
    setResumes(res.data);
  }catch(error){
    console.log(error);
  }
};
  
  useEffect(() => {
    
  fetchResumes();
}, []);
  const uploadResume=async()=>{
    if(!selectedFile){
      alert("Please select a file");
      return;
    }
    const formData=new FormData();

    formData.append(
      "resume",selectedFile
    );
    try{
      const res=await axios.post("https://interviewaceai-rpmo.onrender.com/api/resume/upload",formData);

      console.log(res.data);
     await fetchResumes();
      alert("Resume uploaded successfully");
    }
    catch(error){
      console.error(error);
      alert("Upload failed");
    }

  };
const deleteResume=async(id)=>{
  try{
    await axios.delete(`https://interviewaceai-rpmo.onrender.com/api/resume/${id}`);
    fetchResumes();

  }catch(error){
    console.log(error);
  }
}
  return (
    <div>
      <PageHeader
        title="Resume Analyzer"
        subtitle="Upload your resume and get AI-powered feedback."
      />

      <SectionCard
        title="Upload Resume"
        description="Upload a PDF or DOCX file"
      >
        <div className="flex flex-col items-start w-full">
          <FileDropzone onFileSelect={setSelectedFile} />
          <button
            onClick={uploadResume}
            className="w-full sm:w-auto mt-5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:brightness-110 text-white font-bold rounded-xl shadow-md transition active:scale-98 text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            Upload Resume
          </button>
        </div>
      </SectionCard>

      <SectionCard
        title="Uploaded Resumes"
        description="Your previously uploaded resumes"
      >
        {resumes.length===0?(
          <p>No resumes uploaded yet.</p>
        ):(
          resumes.map((resume)=>(
            <ResumeCard key={resume.id} resume={resume} onDelete={deleteResume}/>
          ))
        )}
      </SectionCard>
    </div>
  );
}

export default ResumeAnalyzer;