function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

function curveGrades() {
    sum = function (accumulator, currentValue) {
        return accumulator + currentValue
    }
    sumGrades = function(array) {
        return array.reduce(sum)
    }
    aryGrades = convertArray(document.querySelector('#scores'))
    minGrade = aryGrades.reduce(function(a,b) {
        return Math.min(a,b)
    })
        maxGrade = aryGrades.reduce(function(a,b) {
        return Math.max(a,b)
    })
        mean = sumGrades(aryGrades) / aryGrades.length
    range = maxGrade - minGrade
    gradeSlice = range / 5
    aryGrades.forEach(applyBell)

    // write the value of aryGrades to the grades div in the HTML document
}