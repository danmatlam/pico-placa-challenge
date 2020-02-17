
import { checkBlocked } from "../helpers/check";

// BLOQUEOS  7:00 a 9:30    //16:00 a 19:30

test(`'PCB1046', '2020/02/26', '6:59'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '6:59')).toBe(false));
test(`'PCB1046', '2020/02/26', '7:00'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '7:00')).toBe(true));

test(`'PCB1046', '2020/02/26', '9:30'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '9:30')).toBe(true));
test(`'PCB1046', '2020/02/26', '9:31'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '9:31')).toBe(false));




test(`'PCB1046', '2020/02/26', '15:59'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '15:59')).toBe(false))
test(`'PCB1046', '2020/02/26', '16:00'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '16:00')).toBe(true))

test(`'PCB1046', '2020/02/26', '19:30'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '9:30')).toBe(true));
test(`'PCB1046', '2020/02/26', '19:31'`, ()=> expect(checkBlocked('PCB1046', '2020/02/26', '9:31')).toBe(false))