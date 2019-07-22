import fetch from '../utils/axios'

export const getMember = (params: Type.Object) => fetch('Auth/Member?with[]=favorites', params)

