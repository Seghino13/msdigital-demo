import User from "../models/User.model";

class UserService {
  async getAllUsers() {
    return User.findAll({
      attributes: { exclude: ["password"] },
    });
  }

  async getUserById(id: number) {
    return User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
  }

  async getUserByEmail(email: string) {
    return User.findOne({
      where: {
        email: email,
      },
    });
  }

  async createUser(data: any) {
    return User.create(data);
  }

  async updateUser(id: number, data: any) {
    const item = await User.findByPk(id);
    if (item) {
      return item.update(data);
    }
    return null;
  }

  async deleteUser(id: number) {
    const item = await User.findByPk(id);
    if (item) {
      return item.destroy();
    }
    return null;
  }
}

export default new UserService();
