import React, { Component } from 'react';

class Map extends Component() {
	constructor(props) {
		super(props);
	}

	    componentDiDMount() {

      	initMap() {

      		let myLatLng = {lat: -25.363, lng: 131.044};
					let map = new google.maps.Map(document.getElementById('map'), {
      			zoom: 4,
      			center:
    			});

    		// var marker = new google.maps.Marker({
      // 	position: myLatLng,
      // 	map: map,
      // 	title: 'Hello World!'
    		// });
  }

	render() {

		return(
			<div id='map'></div>


		)
	}


}