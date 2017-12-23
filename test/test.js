var expect = require("chai").expect;
var server = require("../server.js");

describe("App", function() {
  describe("Server running", function() {
    it("Is serving the right content", function() {
      expect(server.serverOK).to.be.ok;
    });
  });
});
