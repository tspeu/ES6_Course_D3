//moudulo loader
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
//data
import {fleet} from './fleet-data.js';
 //data service
import {FleetDataService} from './services/fleet-data-service.js';

//DE librery
d3.selectAll("p").style("color", "red");
d3.select("body").style("background-color",  function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
d3.selectAll("p")
  .data([ 42])
    .style("font-size", function(d) { return d + "px"; });

let dataService = new FleetDataService();
dataService.loadData(fleet);
//console.log(fleet);

console.log("cars: "+JSON.stringify(dataService.cars));

for( let e of  dataService.errors)
	console.log(e.message, e.data);

/*let cars = dataService.getCarsSortedByLicense();
for (let c of cars)
	console.log(c.license);
*/

/*let carro = dataService.getCarByLicense("AT9900");
console.log(carro);*/
let cars = dataService.filterCarsByMake('e');
for (let c of cars)
	console.log(c.make);
