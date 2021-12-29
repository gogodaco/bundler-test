function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "sayHello", () => $349a00930b14e029$export$2c6a96c059a06e7c);
var $af787fb2e0d5d6f6$exports = {};
$af787fb2e0d5d6f6$exports = function(name) {
    return '<b>' + name + '</b>';
};
$af787fb2e0d5d6f6$exports.boldTagName = 'b';


const $198358c55979feb3$export$10cd491f57af8e11 = 'i';
function $198358c55979feb3$export$2e2bcd8739ae039(name) {
    return '<i>' + name + '</i>';
}


let $349a00930b14e029$var$isBold = true;
function $349a00930b14e029$export$2c6a96c059a06e7c(name) {
    const formatter = $349a00930b14e029$var$isBold ? (/*@__PURE__*/$parcel$interopDefault($af787fb2e0d5d6f6$exports)) : $198358c55979feb3$export$2e2bcd8739ae039;
    $349a00930b14e029$var$isBold = !$349a00930b14e029$var$isBold;
    return `Hello! ${formatter(name)}!`;
}
console.log($349a00930b14e029$export$2c6a96c059a06e7c('정환')); // 'Hello! <b>정환</b>!'
console.log($349a00930b14e029$export$2c6a96c059a06e7c('정환')); // 'Hello! <i>정환</i>!'
console.log($af787fb2e0d5d6f6$exports.boldTagName); // 'b'
console.log($198358c55979feb3$export$10cd491f57af8e11); // 'i'


//# sourceMappingURL=bundle.js.map
