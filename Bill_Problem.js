totalBills = [
    bill_1 = { A: 1000, B: 2000, C: 1000 },
    bill_2 = { A: 300, B: 400, C: 100, D: 200 },
    bill_3 = { A: 3000, B:100, D: 200, },
]
function averageOfEachBills(obj) {          //AVERAGE FUNCTION :- TO FIND EACH BILLS AVERAGE SO WE GET TO KNOW THE AMOUNT EACH SHOULD CONTRIBUTE.
    sum = 0
    count = 0
    for (i in obj) {
        sum = (sum + obj[i])
        count++
    }
    return (avg = sum / count)
}
function balanceDueAmount(obj) {            //BALANCE DUE AMOUNT FUNCTION :- TO CALCULATE EACH PERSONS DUE AMOUNT.
    avg = averageOfEachBills(obj)
    for (i in obj) {
        obj[i] = obj[i] - avg
    }
    return obj
}
const objectSorting = (r) => {              //SORTING FUNCTION :- THIS FUNCTION WILL SORT THE BILL ACCORDING TO THE AMOUNT (MINIMUM - MAXIMUM).
    d = {}
    arr = []
    for (i in r) {
        arr.push(r[i])
    }
    function st(a, b) {
        return a - b
    }
    arr.sort(st)
    for (j of arr) {
        for (k in r) {
            if (j == r[k]) {
                d[k] = r[k]
            }
        }
    } return (d)
}
const objectReverseSortiing = (r) => {      //REVERSE SORTING FUNCTION :- THIS FUNCTION WILL SORT THE BILL ACCORDING TO THE AMOUNT (MAXIMUM - MINIMUM).
    d = {}
    arr = []
    for (i in r) {
        arr.push(r[i])
    }
    function st(a, b) {
        return a - b
    }
    arr.sort(st)
    arr.reverse()
    for (j of arr) {
        for (k in r) {
            if (j == r[k]) {
                d[k] = r[k]
            }
        }
    } return (d)
}
function removeZero(a) {                    //ZERO FUNCTION :- THIS FUNCTION REMOVES THE KEY AND VALUE FROM THE OBJECT IF THE VALUE IS ZERO
    b = {}
    for (i in a) {
        if (a[i] != 0) {
            b[i] = a[i]
        }
    } return (b)
}
////////////////////////////////////////////////////////////////////////////////
toPay = {}
getPaid = {}
emptObj = {}
for (i of totalBills) {
    i = balanceDueAmount(i)
}
// console.log(totalBills)
for (i of totalBills) {
    for (m in i) {
        if (!(m in emptObj)) {
            emptObj[m] = i[m]
        } else {
            emptObj[m] = emptObj[m] + i[m]
        }
    }
}
// console.log(emptObj)
for (i in emptObj) {
    if (emptObj[i] == 0) {
        console.log("payment settled for", i)
    } else if (emptObj[i] < 0) {
        toPay[i] = emptObj[i]
    } else if (emptObj[i] > 0) {
        getPaid[i] = emptObj[i]
    }
}
// console.log(toPay)
toPayS = objectSorting(toPay)
console.log(toPayS)
// console.log(getPaid)
getPaidS = objectReverseSortiing(getPaid)
console.log(getPaidS)
for (j in toPayS) {
    for (i in getPaidS) {
        if (getPaidS[i] > Math.abs(toPayS[j])) {
            console.log(`${j} owes Rs.${Math.abs(toPayS[j]).toFixed(2)} to ${i}`)
            getPaidS[i] = getPaidS[i] - Math.abs(toPayS[j])
            toPayS[j] = 0
            toPayS = removeZero(toPayS)
        } else if (Math.abs(toPayS[j]) > getPaidS[i]) {
            console.log(`${j} owes Rs.${getPaidS[i].toFixed(2)} to ${i}`)
            toPayS[j] = Math.floor(getPaidS[i]) - Math.floor(Math.abs((toPayS[j])))
            getPaidS[i] = 0
            getPaidS = removeZero(getPaidS)
        } else if (getPaidS[i] == Math.abs(toPayS[j])) {
            console.log(`${j} owes Rs.${Math.abs(toPayS[j]).toFixed(2)} to ${i}`)
            getPaidS[i] = 0
            toPayS[j] = 0
            getPaidS = removeZero(getPaidS)
            toPayS = removeZero(toPayS)
        }
    }
}