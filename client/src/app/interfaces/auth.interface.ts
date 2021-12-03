export interface AuthResponse {
  ok: boolean;
  uid?: String;
  name?: String;
  token?: string;
  msg?: String;
  email?: String;
  user?: String;
}

export interface Usuario {
  uid: String;
  name: String;
  email: String;
}
