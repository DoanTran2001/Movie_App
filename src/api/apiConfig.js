// Object chứa các biến cấu hình API như: baseURL(đường dẫn cơ sở), apiKey, func lấy ra đường dẫn hình ảnh
const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '5787e639c6e534d787a341683c3f073b',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;