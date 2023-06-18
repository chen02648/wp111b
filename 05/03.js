function truthTable(n) {
  const numRows = Math.pow(2, n); 
  const table = []; 
  for (let i = 0; i < numRows; i++) {
    const row = []; 
    for (let j = 0; j < n; j++) {
      row.push((i & Math.pow(2, j)) ? 1 : 0); 
    }
    table.push(row); 
  }

  const header = Array.from({ length: n }, (_, i) => "x" + (i + 1));
  header.push("f(" + header.join(", ") + ")");
  console.log(header.join("\t"));

  table.forEach(row => {
    const result = evaluateExpression(row);
    row.push(result);
    console.log(row.join("\t"));
  });
}
