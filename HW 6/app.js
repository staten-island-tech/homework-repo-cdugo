const liList = Array.from(document.querySelectorAll('li'));
// Selects all items in li and adds to an array

liList.filter (el => el.textContent.includes('Flexbox'));
// filters through array to find flexbox



const filtered = liList.filter (el => el.textContent.includes('Flexbox'))
.map(el => el.dataset.time) //maps time 
.map(timeCode => {
const parts = timeCode.split(':').map( part => parseFloat(part));
//gets the timecode, splits with a colon then maps and parses through
return (parts[0] * 60) + parts[1]; //turns time into seconds
})
.reduce((runningTotal, seconds) => runningTotal + seconds,0)
console.log(filtered); //turns array into single number (time)