var s = ["kitty","puppy","swan","penguin","giraffe","penguin","swan","dolphin"]


for (let i = 0; i<s.length;i++) {
  var c = s[i].charCodeAt(s[i].length-2)
  for (let j = 1; j<s.length; j++) {
    var c2 = s[j].charCodeAt(s[j].length-2)
    if (c===)
    if (s[i] === s[j]) {

    }
  }
}

var map = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
}

var unit_map = {
  1: '个',
  2: '十',
  3: '百',
  4: '千',
  5: '万',
  6: '十万',
  7: '百万',
  8: '千万',
  9: '亿'
}

const a = 12345


unit_map[a.length]

function calc(number) {
  number = number+''
  let r = ''
  for (let i = 1;i <= number.length; i++) {
    if (unit_map[number.length-i+1] === '个') {r = r+map[number[i-1]];break}
    r = r+map[number[i-1]] + unit_map[number.length-i+1]
  }

  console.log(r)
}