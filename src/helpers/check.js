import moment from 'moment';

const format = 'hh:mm';


const auxCheck =(before, after, hour)=>{
  const beforeTime = moment(before, format);
  const afterTime = moment(after, format);
  const _hour = hour.format(format)
  console.log  ( `${_hour} is between ${before} - ${after}  `+ hour.isBetween(beforeTime,afterTime))
  return hour.isBetween(beforeTime,afterTime);
}
const checkHours = (hour) => {
    const check = auxCheck('7:00','9:31', hour) || auxCheck('16:00','19:31', hour) ;
    return  check;

}
const checkBlocked = (placa, fecha, hour) => {
  const rules = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0],
  }
  const momentDate = moment(fecha);
  const dayOfWeek = momentDate.day();
  const endingInBLockins = rules[dayOfWeek];
  const endingPlaca = placa.charAt(placa.length - 1);
  const dayLocked = endingInBLockins.find((item) => {
     return item === parseInt(endingPlaca, 0)
  });

  const checkDay =  dayLocked ? true: false;
  const checkHour = checkHours(hour);

  console.log('day:'+checkDay)
  console.log('hour:'+checkHour)

  return checkDay && checkHour
}


export { checkBlocked }





