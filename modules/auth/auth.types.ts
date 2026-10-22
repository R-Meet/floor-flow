
export interface SignupData {
  email: string
  password: string
};

export interface AuthStore {
  loading: boolean
  onSignupSubmit: (data: SignupData) => Promise<void>
}