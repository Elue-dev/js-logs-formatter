var n={reset:"[0m",red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m"};function o(o){var c,t=o.helper,e=o.data,a=o.color,r=void 0===a?"reset":a,i=o.showFunctionOrigin,l=void 0===i||i,m=JSON.stringify(e,null,2),s=null===(c=(new Error).stack)||void 0===c?void 0:c.split("\n"),d=(s?s[2]:"unknown").match(/at (\S+) \(([^)]+)\)/),u=d?d[1]:void 0,v=n[r],g=l&&u?"".concat(t," (called from function: ").concat(u,") =>\n").concat(v).concat(m).concat(n.reset):"".concat(t," =>\n").concat(v).concat(m).concat(n.reset);console.log(g)}export{o as println};
//# sourceMappingURL=index.mjs.map
