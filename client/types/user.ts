// src/types/user.ts
export interface User {
  __v: number;
  _id: string;
  createdAt: string;
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
  roles: string[];
  updatedAt: string;
}

export interface UserState {
  token: string | null;
  user: User | null;
}
