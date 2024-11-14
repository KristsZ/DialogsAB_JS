
function count(from, to, choice, exclusions = []) {
    let result = [];

for (let i = from; i <= to; i++) {

    if (choice === 'all' ||
        (choice === 'odd' && i % 2 !== 0) ||
        (choice === 'even' && i % 2 === 0)) {

        if (!exclusions.includes(i)) {
            result.push(i);
        }
      } 
    }

    return result.join(',');
}

function showCount(from, to, choice, exclusions = []) {
    const output = count(from, to, choice, exclusions);
    document.getElementById('output').innerText = output;
}