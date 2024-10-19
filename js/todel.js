let x = []
x.push('saja hammad')
x.push('leen not completed]')
console.log(x[1].slice(-14))
x[1] = 'saja' + (x[1].slice(-14)=='not completed]'? ' not completed':' completed');
console.log(x)