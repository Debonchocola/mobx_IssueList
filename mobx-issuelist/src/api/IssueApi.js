import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli",
});

export const getIssues = async () => {
  try {
    const res = await axiosInstance.get("issues?sort=comments");
  } catch (error) {
    console.log(error);
  }
};

export const getDetailIssues = async () => {
  try {
    const res = await axiosInstance.get(`issues/${number}`);
  } catch (error) {
    console.log(error);
  }
};
