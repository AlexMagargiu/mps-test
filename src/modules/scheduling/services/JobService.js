import axios from "axios";

const JobService = {
  /* defaultApiPath: "/api/files/v1",
  _callApiService: async function (serviceName, data, options = {}) {
    try {
      let url =
        window.location.origin + this.defaultApiPath + "/" + serviceName;
      const defaultOptions = {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const mergedOptions = { ...defaultOptions, ...options };

      return await axios.post(url, data, mergedOptions);
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }, */

  uploadFile: async function (file) {
    if (!file) {
      throw new Error("No file provided");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      if (response.data.response === "Success") {
        return true;
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("File upload failed:", error);
      throw new Error("Upload failed: " + (error.message || "Unknown error"));
    }
  },

  getAllPartNumbers: async function () {
    try {
      const response = await axios.get("http://localhost:3000/parsedExcel");
      return response.data;
    } catch (error) {
      console.error("Error fetching part numbers:", error);
      throw error;
    }
  },
};

export default JobService;
