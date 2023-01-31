import { v4 as uuidv4 } from 'uuid';

import inMemory from '../../database/in-memory';

export default {
  save: async (user) => {
    const newUser = { ...user, id: uuidv4() };
    inMemory.users.push(newUser);

    return newUser;
  },

  findAll: async () => {
    return inMemory.users;
  },

  findById: async (userId) => {
    const user = inMemory.users.find((user) => user.id === userId);

    if (user) return user;

    return null;
  },

  updateById: async ({ userId, userDetails }) => {
    const index = inMemory.users.findIndex((user) => user.id === userId);

    if (index > 0) {
      inMemory.users[index] = { ...inMemory.users[index], ...userDetails };

      return inMemory.users[index];
    }

    return null;
  },

  deleteById: async (userId) => {
    return inMemory.users.filter((user) => user.id !== userId);
  },
};
