describe('divisible15', function() {
  it("returns 'ping-pong' if number divisible by 15", function() {
    expect(divisibleThree(15)).to.equal("ping-pong");
  });
});

describe('divisible3', function() {
  it("returns 'ping' if number divisible by 3", function() {
    expect(divisibleThree(9)).to.equal("ping");
  });
});

describe('divisible5', function() {
  it("returns 'pong' if number divisible by 5", function() {
    expect(divisibleThree(10)).to.equal("pong");
  });
});
