import http from "k6/http";
import { check, sleep } from "k6";
import exec from  "k6/execution";
export const user =JSON.parse(open("data.json"))
export const options = {
  //scenarios:{
    //accountCreate:{
    //  executer:"per_vus_iterations",
  //vus: 5,
 // iterations:10,
  //duration: "1m",
//},
scenarios: {
  contacts: {
    executor: 'shared-iterations',
    vus: 5,
    iterations: 10,
  
  },
},

thresholds: {
  http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  http_req_duration: ['p(95)<35'], // 95% of requests should be below 200ms
},
};

export default function () {
  console.log(exec.vu.idInTest);
 // const baseUrl = "https://reqres.in/";
 // const endPoint = "api/users/2";
  //const res = http.get(`${baseUrl}${endPoint}`);
  //check(res, { "is status 200": (r) => r.status === 200 });
 // res.body;
   // console.log(res);
  sleep(1);
}