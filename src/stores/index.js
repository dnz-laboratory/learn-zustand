import { create } from 'zustand'
import { createUser, getUsers } from '../api'

export const useStore = create((set,get) => ({
  users: [],
  name: "",
  isLoading: false,
  isError: null,
  getUsers: async () => {
    try {
      set({isLoading: true})
      const response = await getUsers()
      set({users: response.data})
      set({isLoading: false})
    } catch (error) {
      set({isError: error.message})
    }
  },
  createUser: async () => {
    try {
      const response = await createUser(get().name)
      const updatedData = [...get().users, response.data]
      set({users: updatedData})
      set({name: ""})
    } catch (error) {
      set({isError: error.message})
    }
  },
  setNewUser : (name) => {
    set({name})
  }
}))