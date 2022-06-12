// code your solution here
function saturdayFun(activity1 = 'roller-skate!') {
    if (activity1 == 'roller-skate!') {
        return `This Saturday, I want to ${activity1}`
    } else {
        return "This Saturday, I want to bathe my dog!";
    }
}

const mondayWork = function(activity2 = 'go to the office') {
    return `This Monday, I will ${activity2}.`
}


function wrapAdjective(symbol = '*') {
    return function (adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}

let result = wrapAdjective('*')
let emphatic = result("a hard worker")

