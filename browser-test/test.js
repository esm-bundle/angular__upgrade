describe("@esm-bundle/angular__upgrade", () => {
  describe("@angular/upgrade", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-upgrade.js`
        );
        expect(m.VERSION).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-upgrade.min.js`
        );
        expect(m.VERSION).toBeDefined();
      });
    });
  });

  describe("@angular/upgrade/static", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-static.js`
        );
        expect(m.UpgradeModule).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-static.min.js`
        );
        expect(m.UpgradeModule).toBeDefined();
      });
    });
  });
});
