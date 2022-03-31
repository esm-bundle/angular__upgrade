document.head.appendChild(
  Object.assign(document.createElement("script"), {
    type: "systemjs-importmap",
    textContent: `
      {
        "imports": {
          "rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs.min.js",
          "rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs-operators.min.js",
          "@angular/core": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core/system/es2015/ivy/angular-core.min.js",
          "@angular/compiler": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__compiler/system/es2015/ivy/angular-compiler.min.js",
          "@angular/common": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__common/system/es2015/ivy/angular-common.min.js",
          "@angular/platform-browser": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__platform-browser/system/es2015/ivy/angular-platform-browser.min.js",
          "@angular/platform-browser-dynamic": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__platform-browser-dynamic/system/es2015/ivy/angular-platform-browser-dynamic.min.js"
        }
      }`,
  })
);
