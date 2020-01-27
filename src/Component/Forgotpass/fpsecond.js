// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import BrowserHistroy from '../utils/BrowserHistroy';

// import { withRouter } from 'react-router-dom';
// import { emailHandles } from '../../Actions/RemailsActions';

// class fpsecond extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           _id:'',
//           password:''
//            }
//         }
//     onhandlepassword = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }
//     onhandleconfpassword1 = (event) => {
//         this.setState({
//             Confirmpassword: event.target.value
//         })
//     }
//     onhandlerecoverysubmit = (e) => {
//         debugger
//         e.preventDefault();
//         const payload = {
//             password: this.state.password,
//             Confirmpassword: this.state.Confirmpassword
//         }
//         this.props.emailHandle(payload);

//         axios.put(`http://localhost:8191/reset`, payload)
//             .then(console.log('update'))
//             .catch(err => console.log(err))
//         window.location.reload();

//     }
//     confirmmail=(e)=>{
//         sessionStorage.setItem('change',this.state.email)
//         BrowserHistroy.push('/fpsecond');
//     }

//     render() {
//         return (
//             <div>
//                 <div >
//                     <label>New password</label>
//                     <input type="password" onChange={this.onhandlepassword}></input>
                    
//                     <button value="submit" onClick={this.confirmmail}>submit</button>

//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     debugger
//     const { error } = state.RemailsReducer;
//     return { error };
// };

// export default withRouter(connect(mapStateToProps, { emailHandles })(fpsecond));
import React, { Component } from 'react';
import axios from 'axios';
// import './Forgetpassword.css';

class Forgetpassword extends Component {
constructor(props) {
super(props);
this.state = {
_id:'',
password:''
}
}

handlechange=(e)=>{
debugger
this.setState({password:e.target.value})
}
changepassw = () => {
debugger
const payload = {
email: sessionStorage.getItem('change'),
password: this.state.password
}
console.log(payload)

axios.put(`http://localhost:8191/reset`,payload)
.then(console.log('update'))
.catch(err => console.log(err))
window.location.reload();
}


render() {

return (
<div className="frgtpassw">
<label>New Password</label><br/>
<input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br/>
<button onClick={this.changepassw} name="password" className="btn btn-danger">change password</button>
</div>
)
}
}
export default Forgetpassword;

