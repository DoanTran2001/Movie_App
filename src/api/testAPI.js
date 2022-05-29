import axiosClient from "./axiosClient";

export const func = async () => {
  const params = {page: 1};
  try {
    //const a = await axiosClient.get("/movie/popular", {params});
    //console.log(a);
    const b = await axiosClient.get("/movie/526896/videos", { params: {} });
    console.log(b);
  } catch (error) {
    console.log(error);
  }
}
func();

