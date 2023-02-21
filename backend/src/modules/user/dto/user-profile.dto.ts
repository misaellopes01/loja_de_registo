export interface UserProfileDTO {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  role: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}
