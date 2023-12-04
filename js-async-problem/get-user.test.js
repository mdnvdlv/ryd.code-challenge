const { getUser } = require("./get-user");

describe("getUser function", () => {
  test("should return user with roles", () => {
    return getUser(1).then((data) => {
      expect(data).toMatchObject({
        roles: [{ name: "editor" }, { name: "master" }],
        user: { name: "Somebody", roles: [1, 2] },
      });
    });
  });
});
