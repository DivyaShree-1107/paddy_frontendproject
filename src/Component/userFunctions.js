import axios from 'axios'

export const buyform = regUser => {

return axios
.post('Buyform', {
    Name: regUser.Name,
    Address: regUser.Address,
    RTCNumber: regUser.RTCNumber,
    Quantity: regUser.Quantity,
    Price: regUser.Price,
    Type: regUser.Type,
    AccName: regUser.AccName,
    AccNumber: regUser.AccNumber
})
.then(res => {
console.log(res)
})
}