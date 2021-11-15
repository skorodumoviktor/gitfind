import axios from 'axios'

const BASE_URI = '/api'

export const api = {
  authenticate: async (code: string): Promise<boolean> => {
    try {
      const response = await axios.post(BASE_URI + '/authenticate', { code })
      localStorage.setItem('accessToken', response.data)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  },
}
