import { FieldValue, Timestamp } from '@google-cloud/firestore';

export enum PointId {
  A = '劉冠廷',
  B = '許光漢',
  C = '袁澧林',
  D = '柯震東',
  E = '林柏宏',
  F = '宋芸樺',
  G = '王渝萱',
  H = '王淨'
}

export type UserSchema = {
  id: string;
  username: string;
  actor1: string;
  actor2: string;
  actor3: string;
  award: string;
  screenplayName: string;
  screenplayDate: string;
  points: Record<PointId, boolean>;
  coupons: Coupon[];
  shareImage1Url: string;
  shareImage2Url: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type UserData = Omit<UserSchema,'createdAt' | 'updatedAt'>

type Coupon = {
  type: string;
  isRedeem: boolean;
};
