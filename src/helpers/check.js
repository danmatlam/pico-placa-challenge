import moment from 'moment';

const format = 'hh:mm';

const rules = [
  {
    day:1,
    endings:[1, 2]
  },
  {
    day:2,
    endings:[3, 4]
  },
  {
    day:3,
    endings:[5, 6]
  },
  {
    day:4,
    endings:[7, 8]
  },
  {
    day:5,
    endings:[9, 20]
  }
]


const auxCheck =(before, after, hour)=>{
  const beforeTime = moment(before, format);
  const afterTime = moment(after, format);
  return moment(hour, format).isBetween(beforeTime,afterTime);
}
const checkHours = (hour) => {
    return  auxCheck('6:59','9:31', hour) || auxCheck('15:59','19:31', hour) ;
}
const checkBlocked = (placa, fecha, hour) => {
  const momentDate = moment(fecha);
  const dayOfWeek = momentDate.day();
    
  if(dayOfWeek === 0 || dayOfWeek === 6 ) {return false} 
  const endings = rules[dayOfWeek-1].endings;
  const endingPlaca = placa.charAt(placa.length - 1);
  const dayLocked = endings.find((item) => {
     return item === parseInt(endingPlaca, 0)
  });

  
  const checkDay =  dayLocked ? true: false;
  const checkHour = checkHours(hour);
  return checkDay && checkHour
}


const calculateNextDay = placa => {
  let endingPlaca = placa.charAt(placa.length - 1);
      endingPlaca = parseInt(endingPlaca, 0)
    const endingsByPlaca = rules.find((item) => {
    return item.endings[0] === endingPlaca || item.endings[1] === endingPlaca 
    });
    
   const closestDate =   moment().day(endingsByPlaca.day+7)
   return closestDate;
};



export { checkBlocked,calculateNextDay }





