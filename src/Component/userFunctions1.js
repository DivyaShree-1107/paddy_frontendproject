import axios from 'axios'

export const signin = regUser => {

return axios
.get('Signin', {
    email: regUser.email,
password: regUser.password



})
.then(res => {
console.log(res)
})
}



