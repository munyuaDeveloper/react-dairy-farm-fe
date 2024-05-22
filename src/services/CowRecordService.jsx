import axiosInstance from "../utils/axiosInstance";

export const fetchCowRecords = async () => {
  const data = await axiosInstance
    .get("/api/v1/cow-records")
    .then((res) => res.data)
    .catch((error) => console.error(error));

  return data;
};

export const fetchMilkRecords = async () => {
  const data = await axiosInstance
    .get("/api/v1/milk-collection-records")
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return data;
};
