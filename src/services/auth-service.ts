
import type { User } from '../types/user-type'
import { usersDB } from './fakeDB'

export const loginService = async (
  email: string,
  password: string
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersDB.find(
        (u) => u.email === email && u.password === password
      )

      if (!user) {
        reject(new Error('Credenciales inválidas'))
        return
      }

      const { password: _, ...safeUser } = user

      resolve(safeUser)
    }, 1000)
  })
}