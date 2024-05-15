export const options = {
  vus: 300,
  duration: "30s",
};
 
export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}
 
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}