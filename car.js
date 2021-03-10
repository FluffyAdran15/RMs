const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let car = []

  for (let id=1; id <= 10; id++) {

    let number = faker.random.number();
    let vin = faker.vehicle.vin();
    let state = faker.address.state();
    let past = faker.date.past();
    let manufacturer = faker.vehicle.manufacturer();
    let model = faker.vehicle.model();
    let color = faker.vehicle.color();
    let words = faker.random.words();

    car.push({
        "id": id,
        "Veh_num": number,
        "vin_num": vin,
        "vec_serial": number,
        "lic_Num": number,
        "Vec_state": state,
        "Veh_year": past,
        "Vec_make": manufacturer,
        "Vec_Model": model,
        "Vec_color": color,
        "Vec_Detail": words,
    });
  }

  return { "data": car }
}

let dataObj = generateUsers();

fs.writeFileSync('car.json', JSON.stringify(dataObj, null, '\t'));