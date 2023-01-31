import casual from 'casual';

import userRepo from './usersRepository.js';

describe('User Repository using inMemory', () => {
  test('should save user', async () => {
    const newUser = {
      name: casual.name,
      email: casual.email,
    };

    const user = await userRepo.save(newUser);

    console.log(user);

    expect(user.id).toBeDefined();
    expect(user.name).toBe(newUser.name);
    expect(user.email).toBe(newUser.email);
  });
  test('should fetch all users', () => {
    expect(1).toBe(2);
  });
  test('should update user by user id', () => {
    expect(1).toBe(2);
  });
  test('should get single user by id', () => {
    expect(1).toBe(2);
  });
  test('should delete single user by id', () => {
    expect(1).toBe(2);
  });
  test('should return null on get user by id if user id does not exist', () => {
    expect(1).toBe(2);
  });
  test('should return null on update user by id if user id does not exist', () => {
    expect(1).toBe(2);
  });
  test('should return null on delete user by id if user id does not exist', () => {
    expect(1).toBe(2);
  });
});
