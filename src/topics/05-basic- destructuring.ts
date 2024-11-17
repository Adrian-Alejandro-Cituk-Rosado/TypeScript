
interface AudioPlayer{
    audioVolume: number;
    sondgDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    sondgDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song= 'New Song';
const {song:anotherSong, sondgDuration:duration, details}=audioPlayer;
const {author}=details;
// console.log("Song: ", anotherSong)
// console.log("Audio: ", anotherSong)
// console.log("Duration: ", duration)
// console.log("Author: ", author)

const [, , trunks='Not found']:string[]=['Goku', 'Vegeta', 'Trunks'];


console.error("Personaje 3: ", trunks);




export{};