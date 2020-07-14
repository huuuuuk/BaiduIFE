let tableWrapper = document.querySelector("#table-wrapper");


function createTable(selectDateArr) {
    tableWrapper.innerHTML = "";
    let regions = selectDateArr[0];
    let products = selectDateArr[1];
    let arr = getDatas(regions, products);
    let newTable = document.createElement("table");
    let newTb = newTable.createTBody();
    
    let thRow = newTb.insertRow(0);
    let flaginCreateTable;
    (regions.length < products.length) ? flaginCreateTable = true : flaginCreateTable = false;
    if (flaginCreateTable) {
        thArr = ["地区", "商品", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    } else {
        thArr = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    }
    for (x in thArr) {
        if (x != "sale") {
            let cell = thRow.insertCell(x);
            cell.innerHTML = thArr[x];
        } else {
            for (y in thArr[x]) {
                let cell = thRow.insertCell(y + 2);
                cell.innerHTML = thArr[y + 2];
            }
        }

    }
    // console.log(arr);
    
    for (line in arr) {
        // console.log(arr[line]);
        let newTr = newTb.insertRow();
        if (flaginCreateTable) {
            console.log(flaginCreateTable);
            for (x in arr[line]) {
                if (x == "region") {
                    
                    if (line ==0 ||(line)% products.length == 0) {
                        let cell = newTr.insertCell(0);
                        cell.innerHTML = arr[line][x];
                        cell.rowSpan = products.length;
                        console.log(products.length)
                    }
                } else if (x == "product") {
                    let cell = newTr.insertCell(-1);
                    cell.innerHTML = arr[line][x];
                } else {
                    for (y in arr[line][x]) {
                        let cell = newTr.insertCell(-1);
                        cell.innerHTML = arr[line][x][y];
                    }
                }

            }
        } else {
            for (x in arr[line]) {
                if (x == "product") {
                    
                    if (line  ==0 ||(line)% regions.length == 0) {
                        let cell = newTr.insertCell(0);
                        cell.innerHTML = arr[line][x];
                        cell.rowSpan=regions.length;
                    }
                } else if (x == "region") {
                    let cell = newTr.insertCell(-1);
                    cell.innerHTML = arr[line][x];
                } else {
                    for (y in arr[line][x]) {
                        let cell = newTr.insertCell(-1);
                        cell.innerHTML = arr[line][x][y];
                    }
                }
            }
        }
    }
    tableWrapper.appendChild(newTable);
    console.log(newTable);

}