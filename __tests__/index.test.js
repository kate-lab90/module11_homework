import { percent } from "../index.js";

describe("test percent of number", () => {
  it("0 percent of 100 equal 0", () => {
    const assert = require('assert');
    function testGetPercents() {
      assert.strictEqual(arrowGetPercents(0, 100), 0);
    }
  }),
    it("50 percent of 200 equal 100", () => {
      const assert = require('assert');
      function testGetPercents() {
        assert.strictEqual(arrowGetPercents(50, 200), 100);
      }
    }),
    it("75 percent of 80 equal 60", () => {
      const assert = require('assert');
      function testGetPercents() {
        assert.strictEqual(arrowGetPercents(75, 80), 60);
      }
    }),
    it("50 percent of 0 equal 0", () => {
      const assert = require('assert');
      function testGetPercents() {
        assert.strictEqual(arrowGetPercents(50, 0), 0);
      }
    });
});
