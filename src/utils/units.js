//从一个数组中随机取10个 有偶现只取一个的问题
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
function getRandomNum(minnum, maxnum, n){ //随机数
  var choice = maxnum - minnum + 1;
  var num = Math.floor(Math.random() * choice + minnum);
  if (n === num) {
    return getRandomNum(minnum, maxnum, n)
  } else {
    return num
  }
}
//判断是否已经到达顶部
function isTop(){
  var t = document.documentElement.scrollTop||document.body.scrollTop;
  return t === 0 ? true : false;
}
export {
  getRandomArrayElements,
  getRandomNum,
  isTop
}