import"./UIcon.abf03691.js";function r(t){return!o(t)||t.length===0}function f(t){return!o(t)||r(t.trim())}function e(t){if(typeof t=="boolean")return t;if(typeof t!="function")throw"(condition) should be a boolean or a function";const n=t();if(typeof n!="boolean")throw"(condition) result is not a boolean.";return n}function o(t){return e(typeof t=="string")}export{f as i};
