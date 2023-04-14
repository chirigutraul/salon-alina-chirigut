export function useMinutesToString(minutes:number){
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    let resultingString = '';

    if(hours > 0){
      resultingString += `${hours} ${hours===1 ? 'ora' : 'ore'}`;
    } else if(remainingMinutes > 0) {
      resultingString += `${remainingMinutes}min`;
    }

    return resultingString;
}