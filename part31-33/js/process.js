
function getSelect() {
    //创建数组
    let regions = [];
    let products = [];
    for (i = 0; i < selectWrapper.children.length; i++) {
        for (y = 1; y < selectWrapper.children[i].children.length; y++) {
            if (selectWrapper.children[i].children[y].checked) {
                if (i == 0) {
                    regions.push(selectWrapper.children[i].children[y].value);
                } else {
                    products.push(selectWrapper.children[i].children[y].value);
                }
            }

        }
    }
    let selectDate = [regions, products];
    return selectDate;
}
function getDatas(regions,products) {
    //判断条件的先后顺序
    //regions.length < products.length
    //  地区 在第一列
    //products.length < regions.length
    //  商品 在第一列

    

    let resultArr = [];
    let tempArr = [];
    if (regions.length < products.length) {
        for (x in products) {
            tempArr =tempArr.concat( sourceData.filter(data => data.product == products[x]));
        }
        for (x in regions) {
           resultArr= resultArr.concat(tempArr.filter(data => data.region == regions[x]));
        }
    } else {
        
        for (x in regions) {
            c = sourceData.filter(data => data.region == regions[x]);
            tempArr =tempArr.concat(c);
        }
        for (x in products) {
            resultArr =resultArr.concat( tempArr.filter(data => data.product == products[x]));
        }
       
    }
    return resultArr
    // console.log(resultArr);


}
