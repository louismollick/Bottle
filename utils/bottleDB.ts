import BottleTags from './bottleTags';

export interface IBottle {
    tags: string[],
    file: any
}

const bottleDB: IBottle[] = [
    {
        tags: [BottleTags.Angry], file: require('../assets/audio/Angry.mp3')
    },
    {
        tags: [BottleTags.Angry, BottleTags.Funny], file: require('../assets/audio/ChelseaLost.mp3')
    },
    {
        tags: [BottleTags.Anxious], file: require('../assets/audio/Anxious.mp3')
    },
    {
        tags: [BottleTags.Bored, BottleTags.Silly, BottleTags.Funny], file: require('../assets/audio/Bored.mp3')
    },
    {
        tags: [BottleTags.Bored], file: require('../assets/audio/Bored2.mp3')
    },
    {
        tags: [BottleTags.Happy], file: require('../assets/audio/Happy.mp3')
    },
    {
        tags: [BottleTags.Sad], file: require('../assets/audio/Sad.mp3')
    },
    {
        tags: [BottleTags.Anxious, BottleTags.Sad], file: require('../assets/audio/Scared.mp3')
    },
    {
        tags: [BottleTags.Silly, BottleTags.Funny, BottleTags.Happy], file: require('../assets/audio/Silly.mp3')
    }
];

export default bottleDB;