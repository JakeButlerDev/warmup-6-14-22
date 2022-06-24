convertTimes = (videoLengthString) => {
    var videoMinutesToSec = videoLengthString.slice(0, videoLengthString.indexOf(":"))
    videoMinutesToSec = parseInt(videoMinutesToSec) * 60
    console.log(videoMinutesToSec);
    var videoSeconds = videoLengthString.slice(videoLengthString.indexOf(":"))
    videoSeconds = videoSeconds.shift()
    console.log(videoSeconds);
    // return videoSeconds
}

console.log(convertTimes("13:56"));

// Still plenty to do here