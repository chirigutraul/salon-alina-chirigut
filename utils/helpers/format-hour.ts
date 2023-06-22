import { Service } from "@prisma/client";

export function minutesToString(service: Service | undefined){
    if(!service){
      return null;
    }

    if(!service.duration) return null; 

    const parsedMinutes = parseInt(service.duration);
    const hours = Math.floor(parsedMinutes / 60);
    const remainingMinutes = parsedMinutes % 60;
    
    let resultingString = '';

    if(hours > 0){
      resultingString += `${hours} ${hours===1 ? 'ora' : 'ore'}`;
    } else if(remainingMinutes > 0) {
      resultingString += `${remainingMinutes}min`;
    }

    return resultingString;
}