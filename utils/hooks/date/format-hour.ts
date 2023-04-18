import { Service } from "@prisma/client";

export function useMinutesToString(service: Service | undefined){
    if(!service || service.duration) return null; 

    const minutes = service.duration;
    const parsedMinutes = parseInt(minutes);
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