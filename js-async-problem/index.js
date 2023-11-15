const { dbFakeUserRequest, dbFakeRoleRequest } = require('./api');

const test = async () => {

  const user = await dbFakeUserRequest(1)

  const roles = await Promise.all(user.roles.map(async role => {
    const roleRes = await dbFakeRoleRequest(role)
    return roleRes
  }))

  const rolesName = roles.map(el => el.name)

  console.log(` user ${user.name} has role of: ${rolesName}`)
}
test()