export interface UpdateUserBySuperAdminDTO {
  name?: string;
  email?: string;
  role?: string;
  password?: string;
}

export interface UpdateUserDTO {
  avatar_url?: string;
  name?: string;
  password?: string;
  new_password?: string;
}
