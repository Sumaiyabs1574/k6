import http from "k6/http";
import { sleep } from "k6";
import exec from "k6/execution";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
const csvData = papaparse.parse(open("users.csv"), { header: true }).data;
export default function () {
   
    console.info(csvData[0]);
    const user = csvData[exec.scenario.iterationInTest];
    
   
        sleep(1);}