const audioFiles : AudioFiles = {
    "Angry": require('../assets/audio/Angry.mp3'),
    "Anxious": require('../assets/audio/Anxious.mp3'),
    "Bored": require('../assets/audio/Bored.mp3'),
    "Happy": require('../assets/audio/Happy.mp3'),
    "Sad": require('../assets/audio/Sad.mp3'),
    "Scared": require('../assets/audio/Scared.mp3'),
    "Silly": require('../assets/audio/Silly.mp3')
}

interface AudioFiles {
    [key: string]: number;
 }

 export default audioFiles;