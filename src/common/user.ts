import { PointId, UserData, UserSchema } from './types';

export const getUserInitData = (userId: string, username: string): UserData => {
  return {
    id: userId,
    username: username,
    actor1: '',
    actor2: '',
    actor3: '',
    award: '',
    screenplayName: '',
    screenplayDate: '',
    shareImage1Url: '',
    shareImage2Url: '',
    points: Object.values(PointId).reduce(
      (obj, key) => {
        Object.assign(obj, { [key]: false });
        return obj;
      },
      {} as UserSchema['points']
    ),
    coupons: [],
  };
};
