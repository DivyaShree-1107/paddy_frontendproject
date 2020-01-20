import React, { Component } from 'react';
import paddy from '../Info/hdimgpaddy.jpeg'
import './Info.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import { Navbar } from 'react-bootstrap';

class Info extends Component {
  constructor() {
    super()
    this.state = {
      showMe0: false,
      showMe: false,
      showMe1: false,
      showMe2: false
    }
  }
  showContentTitle() {
    this.setState({
      showMe0: !this.state.showMe0
    })
  }
  operationshort() {
    this.setState({
      showMe: !this.state.showMe
    })
  }
  operationmedium() {
    this.setState({
      showMe1: !this.state.showMe1
    })
  }
  operationlong() {
    this.setState({
      showMe2: !this.state.showMe2
    })
  }
  render() {
    return (

      <div>

        <Navbar />
        <div className="info_main">
          <img onClick={() => this.showContentTitle()} className="home_paddy_img " src={paddy} ></img>
          <h1 className="image_info"><a href="#" />Click on the Image to know more</h1>
          {
            this.state.showMe0 ?
              <div className="variety_title">
                <button onClick={() => this.operationshort()} className="paddy_variety_sub_titl">Short Duration Crop</button>
                <button onClick={() => this.operationmedium()} className="paddy_variety_sub_titl">Medium Duration Crop</button>
                <button onClick={() => this.operationlong()} className="paddy_variety_sub_titl">Long Duration Crop</button>
              </div>
              : null
          }
          {
            this.state.showMe ?
              <div className="div_content">
                <table className="table_contact">
                  <tr>
                    <th>Variety</th>
                    <th>Duration(Days)</th>
                    <th>Suitable Zone	</th>
                    <th>Special Features</th>
                  </tr>
                  <tr>
                    <td>Madhu</td>
                    <td>120-125</td>
                    <td>North Eastern Transition Zone, North Eastern Dry Zone and Northern Dry Zone	</td>
                    <td>High yielding, tolerant to cold. Grains are medium slender. It is moderately resistant to stem borer, bacterial leaf blight and blast. It is suitable for summer planting. It has the yield potential of 55-60 quintals per hectare.</td>
                  </tr>
                  <tr>
                    <td>Mandya Rani</td>
                    <td>130-135</td>
                    <td>North Eastern Transition Zone, North Eastern Dry Zone, Northern Dry Zone and Northern Transition Zone</td>
                    <td>It is a semi-dwarf, high tillering, short duration variety. It has super fine grain</td>
                  </tr>
                  <tr>
                    <td>Jothi</td>
                    <td>125-130</td>
                    <td>Northern Transition Zone	</td>
                    <td>Suitable for Rain fed Uplands and grains are long bold.</td>
                  </tr>
                  <tr>
                    <td>Mahaveer</td>
                    <td>110-115</td>
                    <td>Coastal Zone	</td>
                    <td>It is suitable for upland of gall midge endemic areas of South Kanara and North Kanara in kharif season. It has a dormancy of 15 days after harvest. It has a medium grain and the kernel is red in colour. It is resistant to gall midge. This variety is liked by the farmers in the coastal region. It has an yield potential of 30 q/ha.</td>
                  </tr>
                  <tr>
                    <td>Shakthi</td>
                    <td>120-125</td>
                    <td>Coastal Zone</td>
                    <td>A dwarf variety with semi compact habit. It bears short bold grains. It has resistance to gall midge and is drought tolerant and blast tolerant.</td>
                  </tr>
                  <tr>
                    <td>Amrut</td>
                    <td>105-110</td>
                    <td>Northern Transition Zone</td>
                    <td>Suitable for Rain fed Uplands and grains are long bold.</td>
                  </tr>

                </table>
              </div>
              : null
          }




          {
            this.state.showMe1 ?
              <div className="div_content">
                <table>
                  <tr>
                    <th>Variety</th>
                    <th>Duration(Days)</th>
                    <th>Suitable Zone	</th>
                    <th>Special Features</th>
                  </tr>
                  <tr>
                    <td>Puspha</td>
                    <td>125-135</td>
                    <td>North Eastern Transition Zone, North Eastern Dry Zone and Northern Dry Zone</td>
                    <td>Medium duration, high yielding variety with long slender grain.</td>
                  </tr>
                  <tr>
                    <td>Mangala</td>
                    <td>105-130</td>
                    <td>North Eastern Transition Zone, North Eastern Dry Zone, Northern Dry Zone, Northern Transition Zone and Hill Zone</td>
                    <td>High yielding, short duration variety, tolerant to cold.</td>
                  </tr>
                  <tr>
                    <td>Avinash/Gama - 318</td>
                    <td>135-145</td>
                    <td>Northern Transition Zone	</td>
                    <td>Northern Dry Zone and Northern Transition Zone</td>
                  </tr>
                  <tr>
                    <td>MTU1001/Vijetha</td>
                    <td>130-135</td>
                    <td>Northern Transition Zone	</td>
                    <td>Semi-dwarf (115 cm), grains: Medium slender tolerant to Brown plant hopper and blast; Yield: 97 Q/ha.</td>
                  </tr>
                  <tr>
                    <td>Shakthi</td>
                    <td>120-125</td>
                    <td>Coastal Zone</td>
                    <td>A dwarf variety with semi compact habit. It bears short bold grains. It has resistance to gall midge and is drought tolerant and blast tolerant.</td>
                  </tr>
                  <tr>
                    <td>Amrut</td>
                    <td>105-110</td>
                    <td>Northern Transition Zone</td>
                    <td>Suitable for Rain fed Uplands and grains are long bold.</td>
                  </tr>

                </table>
              </div>
              : null
          }





          {
            this.state.showMe2 ?
              <div>
                <table className="div_content">
                  <tr>
                    <th>Variety</th>
                    <th>Duration(Days)</th>
                    <th>Suitable Zone	</th>
                    <th>Special Features</th>
                  </tr>
                  <tr>
                    <td>Madhu</td>
                    <td>120-125</td>
                    <td>North Eastern Transition Zone, North Eastern Dry Zone and Northern Dry Zone	</td>
                    <td>High yielding, tolerant to cold. Grains are medium slender. It is moderately resistant to stem borer, bacterial leaf blight and blast. It is suitable for summer planting. It has the yield potential of 55-60 quintals per hectare.</td>
                  </tr>
                  <tr>
                    <td>Mandya Rani</td>
                    <td>130-135</td>
                    <td>North Eastern Transition Zone, North Eastern Dry Zone, Northern Dry Zone and Northern Transition Zone</td>
                    <td>It is a semi-dwarf, high tillering, short duration variety. It has super fine grain</td>
                  </tr>
                  <tr>
                    <td>Jothi</td>
                    <td>125-130</td>
                    <td>Northern Transition Zone	</td>
                    <td>Suitable for Rain fed Uplands and grains are long bold.</td>
                  </tr>
                  <tr>
                    <td>Mahaveer</td>
                    <td>110-115</td>
                    <td>Coastal Zone	</td>
                    <td>It is suitable for upland of gall midge endemic areas of South Kanara and North Kanara in kharif season. It has a dormancy of 15 days after harvest. It has a medium grain and the kernel is red in colour. It is resistant to gall midge. This variety is liked by the farmers in the coastal region. It has an yield potential of 30 q/ha.</td>
                  </tr>
                  <tr>
                    <td>Shakthi</td>
                    <td>120-125</td>
                    <td>Coastal Zone</td>
                    <td>A dwarf variety with semi compact habit. It bears short bold grains. It has resistance to gall midge and is drought tolerant and blast tolerant.</td>
                  </tr>
                  <tr>
                    <td>Amrut</td>
                    <td>105-110</td>
                    <td>Northern Transition Zone</td>
                    <td>Suitable for Rain fed Uplands and grains are long bold.</td>
                  </tr>

                </table>
              </div>
              : null
          }
        </div>
        <Footer />

      </div>

    );
  }
}

export default Info;