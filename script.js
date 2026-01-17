let array = [junk,crew,tools,error,fuel,noise,food,brokenpanel,water,
    trash,supplies,oxygen,spareparts,debris,labequipment];
let fixedStation = array.slice(1, 10);
array.shift();
array.splice(2,1);
array.splice(3,1);
array.splice(4,1);
fixedStation.pop();
fixedStation.splice(2,0,fuel);
fixedStation.push(supplies,oxygen);
console.log(fixedStation);