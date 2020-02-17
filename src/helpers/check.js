import moment from 'moment';

const format = 'hh:mm';


const auxCheck =(before, after, hour)=>{
  const beforeTime = moment(before, format);
  const afterTime = moment(after, format);
  return moment(hour, format).isBetween(beforeTime,afterTime);
}
const checkHours = (hour) => {
    const check = auxCheck('6:59','9:31', hour) || auxCheck('15:59','19:31', hour) ;
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
  return checkDay && checkHour
}


const calculateNextDay = day => {
  const today = moment().isoWeekday();
  if (today <= day) {
    return moment().isoWeekday(day);
  } else {
    return moment()
      .add(1, "weeks")
      .isoWeekday(day);
  }
};



export { checkBlocked,calculateNextDay }





