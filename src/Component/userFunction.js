import axios from 'axios'

export const signup = regUser => {

return axios
.post('Signup', {
Firstname: regUser.Firstname,
Username: regUser.Username,
password: regUser.password,
Confirmpassword: regUser.Confirmpassword,
email: regUser.email,
Mobnum: regUser.Mobnum
})
.then(res => {
console.log(res)
})
}



