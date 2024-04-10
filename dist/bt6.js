"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
const song = new Song(1, 'song', 180);
console.log(song.name);
console.log(song.length);
song.name = 'new song name';
song.length = 200;
console.log(song.name);
console.log(song.length);
