import { useState } from "react";

function FileDropzone({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(onFileSelect){
      onFileSelect(file);
    }
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50/30 hover:bg-indigo-50/10 p-8 text-center rounded-2xl cursor-pointer transition-all flex flex-col items-center justify-center group relative w-full">
      <div className="text-3xl mb-3 text-slate-400 group-hover:text-indigo-500 transition duration-150">
        📥
      </div>
      <h3 className="text-sm font-bold text-slate-700 group-hover:text-indigo-650 transition duration-150">Drag & Drop Resume Here</h3>

      <p className="text-xxs text-slate-450 mb-5">PDF or DOCX files only (Max 5MB)</p>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-slate-100 file:text-slate-700 hover:file:bg-indigo-50 hover:file:text-indigo-700 transition cursor-pointer"
      />

      {fileName && (
        <div className="mt-5 px-3 py-1.5 bg-indigo-50 border border-indigo-100/50 rounded-xl text-xxs font-bold text-indigo-750 inline-flex items-center gap-1">
          📎 Selected: <strong className="text-slate-700">{fileName}</strong>
        </div>
      )}
      
    </div>
  );
}

export default FileDropzone;