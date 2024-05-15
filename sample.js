import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
export const options = {
  vus: 30,
  duration: '2m',
  thresholds: {
    http_req_duration: [{ threshold: 'p(99) < 10', abortOnFail: true }],
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
}
export function teardown(data) {
  return {
    "summary.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}