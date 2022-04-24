/*
In this company there are different types of media: books, CD, movies
Create a parent class Media and three subclases: book, movie and CD
*/

class Media{
    constructor(title){
      this._title = title
      this._isCheckOut = false
      this._ratings = []
    }
    get getTitle(){
      return this._title
    }
    get getIsCheckOut(){
      return this._isCheckOut
    }
    get getRatings(){
      return this._ratings
    }
  
    set setIsCheckOut(bool){
      this._isCheckOut = bool
    }
    
    toggleCheckOutStatus(){
      this._isCheckOut = !this._isCheckOut
    }
  
    getAverageRating(){
      let sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)
      let lengthArray = this._ratings.length
      let average = sum / lengthArray
      return average
    }
    
    addRating(newRating){
      this._ratings.push(newRating)
    }
  }
  
  class Book extends Media{
    constructor(author, title, pages){
      super(title)
      this._author= author
      this._pages = pages
    }
    get getAuthor(){
      return this._author
    }
    get getPages(){
      return this._pages
    }
  }
  class Movie extends Media{
    constructor(director, title, runTime){
      super(title)
      this._director = director
      this._runTime = runTime
    }
    get getDirector(){
      return this._director
    }
    get getRunTime(){
      return this._runTime
    }
  }
  class CD extends Media{
    constructor(artist, songs){
      super(title)
      this._artist = artist
      this._songs = songs
    }
    get getArtist(){
      return this._artist
    }
    get getSongs(){
      return this._songs
    }
  }
  