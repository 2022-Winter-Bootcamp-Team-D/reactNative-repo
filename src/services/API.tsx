import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        Accept : 'application/json',
        useQueryString: 'true',
    },
});

// 요청 인티셉터 (요청 전에 가로채서 axios 설정을 적용함)
API.interceptors.request.use(
    function (config) {
      console.log(config);
      // 요청 성공 직전 호출
      // axios 설정값을 넣음 (사용자 정의 설정도 추가 가능)
      return config;
    },
    function (error) {
      // 요청 에러 직전 호출
      return Promise.reject(error);
    },
  );
  
  // 응답 인티셉터 (응답 직전에 호출)
  API.interceptors.response.use(
    function (response) {
      // https stauts === 200 일 때 - axios 함수에서 .then()으로 연결됨
      return response;
    },
  
    function (error) {
      // https stauts !== 200 일 때 - axios 함수에서 .catch()으로 연결됨
      return Promise.reject(error);
    },
  );

export default API;