const companies = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook', '  Oracle'];
let filteredCompanies = [];
for (let i = 0; i < companies.length; i++) {
    let count = 0;
    for (let j = 0; j < companies[i].length; j++) {
        if (companies[i][j].toLowerCase() === 'o') {
            count++;
            if (count > 1) {
                break;
            }
        }
    }
    if (count <= 1) {
        filteredCompanies.push(companies[i]);
    }
}
console.log(filteredCompanies);
