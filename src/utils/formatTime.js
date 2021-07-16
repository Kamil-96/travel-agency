export const formatTime = seconds => {

  if(!seconds || typeof seconds !== 'number' || seconds < 0) {
    return null;
  } else {
    let sec = Math.floor(seconds % 60);
    let min = Math.floor((seconds / 60) % 60);
    let hrs = Math.floor(seconds / 3600);

    if(sec < 10) {sec = '0' + sec;}
    if(min < 10) {min = '0' + min;}
    if(hrs < 10) {hrs = '0' + hrs;}

    return hrs+':'+min+':'+sec;
  }
};
