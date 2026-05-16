describe("sortInDecreasingOrder", function() {

  it("returns the inverse sorted values", function() {

    let arr = [5, 2, 1, -10, 8];
    sortInDecreasingOrder(arr);
    assert.deepEqual(arr, [8, 5, 2, 1, -10]);
  });

});