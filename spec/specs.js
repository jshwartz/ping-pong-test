describe('divisible15', function() {
  it("returns 'ping-pong' if number divisible by 15", function() {
    expect(divisible15(15)).to.equal(true);
  });
});

describe('divisible3', function() {
  it("returns 'ping' if number divisible by 3", function() {
    expect(divisible3(9)).to.equal(true);
  });
});

describe('divisible5', function() {
  it("returns 'pong' if number divisible by 5", function() {
    expect(divisible5(10)).to.equal(true);
  });
});
