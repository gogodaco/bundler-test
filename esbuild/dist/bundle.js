(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // src/bold.js
  var require_bold = __commonJS({
    "src/bold.js"(exports, module) {
      module.exports = function(name) {
        return "<b>" + name + "</b>";
      };
      module.exports.boldTagName = "b";
    }
  });

  // src/index.js
  var import_bold = __toESM(require_bold());

  // src/italic.js
  var italicTagName = "i";
  function italic_default(name) {
    return "<i>" + name + "</i>";
  }

  // src/index.js
  var isBold = true;
  function sayHello(name) {
    const formatter = isBold ? import_bold.default : italic_default;
    isBold = !isBold;
    return `Hello! ${formatter(name)}!`;
  }
  console.log(sayHello("\uC815\uD658"));
  console.log(sayHello("\uC815\uD658"));
  console.log(import_bold.boldTagName);
  console.log(italicTagName);
})();
