function knapSack(valArr, wtArr, capacity) {
  // Build Value and Keep Tables
  // Fill in Tables 
  // Pull Appropriate Items & Return 

  // Tables
  // Rows will be the number of items
  // Columns will be the capacity 
  let vTable = new Array;
  let keepTable = new Array;
  for (let i = 0; i < valArr.length + 1; i++) {
    vTable.push(new Array(capacity));
    keepTable.push(new Array(capacity));
  }
  // Populate Top Row of both with 0
    // If the number of items is 0 then the best you can steal is 0
  for (let i = 0; i < capacity; i++) {
    vTable[0][i] = 0;
    keepTable[0][i] = 0;
  }
  // console.log(vTable);
  // Fill in the Tables

  // Nested Loop, 1 to work through the items another to go through the capacity for those items
  for (let i = 1; i <= valArr.length; i++) {
    let weight = wtArr[i - 1];
    let value = valArr[i - 1];
    for (let c = 0; c < capacity; c++) {
      // Compare to see if weight is less than or equal to current capacity (c)
        // If its equal, we need to see if the value is greater than the value at the previous items spot vTable[i][c]
        // If its less, we need to compare its value plus the max value at the capacity's difference against the previous items spot
      if (weight === (c + 1) && value > vTable[i - 1][c]) {
        // We keep the item
        keepTable[i][c] = 1; 
        vTable[i][c] = value;
      } else if (weight < (c + 1) && (value + vTable[i - 1][c - weight]) > vTable[i - 1][c]) {
        keepTable[i][c] = 1;
        vTable[i][c] = value + vTable[i - 1][c - weight];
      } else {
        // We Don't Keep the Item
        vTable[i][c] = vTable[i - 1][c];
        keepTable[i][c] = 0;
      }
    }
  }

  // Now that we've built our Tables, we need to start at the bottom corner and work our way back to determine if an item is used
  let items = [];
  let i = valArr.length;
  let w = capacity - 1;
  while (i > 0) {
    if (keepTable[i][w]) {
      items.push(i);
      w -= wtArr[i - 1];
    }
    i -= 1;
  }

  return items.reverse();
}



let v = [5, 3, 4];
let w = [3, 2, 1];
console.log(knapSack(v, w, 5));