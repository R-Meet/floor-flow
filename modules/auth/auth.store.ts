
import { create } from 'zustand'
import { AuthStore, SignupData } from './auth.types'

export const useAuthStore = create<AuthStore>(set => ({

  loading: false,

  onSignupSubmit: async (data: SignupData) => {
    console.log(data);
  }

}));
