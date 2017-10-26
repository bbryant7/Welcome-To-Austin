// const mongoose = require('mongoose');
//
// const savedRoutesSchema = new mongoose.Schema({
//   origin: {type: String, required: true},
//   destination: {type: String, required: true},
//   waypoints: Array,
//   optimize: {type: Boolean, required: true},
//   mode: {type: String, required: true}
//
// })
//
// const savedRoutes = mongoose.model('savedRoutes', savedRoutesSchema);
//
// module.exports = savedRoutes;
directionsService.route({
  origin: start,
  destination: document.getElementById('end').value,
  waypoints: waypoints,
  optimizeWaypoints: true,
  travelMode: 'DRIVING'
}, function(response, status) {
  if (status === 'OK') {
    // visiual display of route legs
      directionsDisplay.setDirections(response);

      // }
    console.log("woohooo!!")
  } else {
    window.alert('Directions request failed due to ' + status);
  }
});
}
