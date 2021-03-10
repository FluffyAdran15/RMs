const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let person = []

  for (let id=1; id <= 100; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let middleName = faker.name.middleName();
    let title = faker.name.title();
    let number = faker.random.number();
    let alphaNumeric = faker.random.alphaNumeric();
    let gender = faker.name.gender();
    let color = faker.vehicle.color();
    let past = faker.date.past();
    let streetAddress =faker.address.streetAddress();
    let word = faker.random.word();
    let phoneNumber = faker.phone.phoneNumber();
    let words = faker.random.words();



    person.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "middle_name": middleName,
        "alias": title,
        "sos_num": number,
        "dl_num": alphaNumeric,
        "race": title,
        "gender": gender,
        "weight": alphaNumeric,
        "height": alphaNumeric,
        "eye": color,
        "hair": color,
        "Dob": past,
        "stm": word,
        "address": streetAddress,
        "phone": phoneNumber,
        "gang_aff": word,
        "hazzard": words
        
    });
  }

  return { "data": person }
}

let dataObj = generateUsers();

fs.writeFileSync('person.json', JSON.stringify(dataObj, null, '\t'));