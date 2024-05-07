import { EmployessMiddleware } from './employess.middleware';

describe('EmployessMiddleware', () => {
  it('should be defined', () => {
    expect(new EmployessMiddleware()).toBeDefined();
  });
});
