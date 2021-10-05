import axiosApi from '../Helpers/axios'

class UploadFilesService {

    async uploadFiles(file) {
        /* let formData = new FormData();
        formData.append("file", file); */

        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "insta-clone")
        formData.append("cloud_name","harsh-cloud-bucket");
    
        return axiosApi.post("https://api.cloudinary.com/v1_1/harsh-cloud-bucket/image/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
    }
  
    getFiles() {
      return axiosApi.get("/upload_files");
    }
  }
  
  export default new UploadFilesService();