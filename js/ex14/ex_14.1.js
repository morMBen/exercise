function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3], [5, 66, 23]);



// 1 -  line no 3 - arr1 = undefine 
// 2 - I use's the web dev tools sources while i input a debugger in line 3.
// 3 - one comma was missing at line 10 and sum canot get any change while he is const.