import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import { FaFileExcel } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import JobService from "../services/JobService";
import FileUploadLogic from "../utils/FileUploadLogic";

export default function Dropzone() {
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const droppedFile = acceptedFiles[0];
    if (droppedFile && FileUploadLogic.isValidExcelFile(droppedFile)) {
      setFile(droppedFile);
      setError(null);
      setIsUploaded(false);
    } else {
      setFile(null);
      setError("Please upload a valid Excel file (.xlsx or .xls)");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
  });

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    try {
      await JobService.uploadFile(file);
      setIsUploaded(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsUploaded(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isUploaded && (
        <span className="mb-2 text-sm text-excelGreen">Upload Successful!</span>
      )}
      {error && <p className="mb-2 text-sm text-error">{error}</p>}
      <div
        className={`${
          isDragActive ? "border-default" : "border-dashed border-border"
        } relative border rounded-md flex items-center justify-center w-4/5 overflow-hidden h-2/6 max-h-40 min-w-max min-h-max`}
      >
        {file ? (
          <div className="flex flex-col items-center justify-center w-full p-4">
            <div className="flex items-center gap-2 p-1">
              <FaFileExcel className="w-6 h-6 text-excelGreen" />
              <p className="text-lg font-semibold">{file.name}</p>
            </div>
            <p className="text-sm text-secText">
              {FileUploadLogic.formatFileSize(file.size)}
            </p>
            <div className="flex items-center justify-center w-full gap-4 p-2 text-sm">
              <button
                onClick={handleUpload}
                className="px-6 py-2 text-white rounded-md bg-excelGreen"
                disabled={isLoading}
              >
                Upload
              </button>
              <button
                onClick={() => {
                  setFile(null);
                  setError(null);
                  setIsUploaded(false);
                }}
                className="px-6 py-2 text-white rounded-md bg-error"
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className="flex items-center justify-center w-full h-full p-4 cursor-pointer min-h-28"
          >
            <input {...getInputProps()} />
            <div
              className={`flex flex-col justify-center items-center ${
                isDragActive ? "absolute inset-0 bg-default" : "w-full h-full"
              }`}
            >
              {isDragActive ? (
                <FaFileUpload className="w-16 h-16 text-white" />
              ) : (
                <>
                  <p className="text-center">
                    Drop your Excel file here or click to browse
                  </p>
                  <p className="mt-2 text-xs">(.xlsx or .xls)</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <LoadingSpinner size={40} color="#ffffff" />
        </div>
      )}
    </>
  );
}
