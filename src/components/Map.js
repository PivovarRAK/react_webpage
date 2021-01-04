import React, { Component } from 'react'
import GoogleMapReact from "google-map-react";

 
class Map extends Component {
  constructor(props){
      super(props);
      this.state = {
          center: {
              lat:50.9,
              lng:6.9
          },
          zoom: 15,
      }
  }
 
  render() {
    return (
      <div style={{ alignItems:'center', display:'inline-flex', height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB87Z5_v-PQdQBsV2-506iaT5c_-JzH_AQ"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;