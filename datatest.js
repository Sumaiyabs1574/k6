import { check } from 'k6';
import { csv } from 'k6/parse';
let data = csv.open('users.csv');

export default function () {
    let row = data.next();
    if (row) {
        
        let first_name = row['first_name'];
        let last_name = row['last_name'];

        console.log(`first_name: ${first_name}, last_name: ${last_name}`);

    
    } else {
        console.log('End of CSV file reached.');
    }
}
