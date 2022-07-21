// let promie = new Promise((resove, reject)=>{
//     setTimeout(() => {
//     console.log("i am resolve");
//     }, 10000)
// console.log("i am not resolve");    
// })



function successCallback(result) { 
  console.log("Audio file ready at URL: " + result);
}
// successCallback(4);
function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}
// failureCallback(2);

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
