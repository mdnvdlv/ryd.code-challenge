const { dbFakeUserRequest, dbFakeRoleRequest } = require("./api");

async function getUser(id) {
  //getting user by given id
  let user = await dbFakeUserRequest(id);

  let roles = [];
  //iterating through roleIds of the user
  for (const roleId of user.roles) {
    //getting role by given id
    const role = await dbFakeRoleRequest(roleId);
    //saving each found role
    roles.push(role);
  }
  return { user: user, roles: roles };
}
module.exports = { getUser };
