import { UNITS } from "../constance";
export function getOpposite(unit) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}
export const converTemperatureTo = (unit, value) => {
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
};
export const isIceTemperature=(value, unit)=>{
    if(unit===UNITS.celcius){
        return value<=0
    }else if(unit===UNITS.faranheit){
        return value >=0
    }else{
        return value<=32
    }
}