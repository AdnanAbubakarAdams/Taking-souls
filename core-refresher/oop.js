// Write a function findWordFrequency that takes a sentence (a string), and returns an object with each word as a key, with a value of how many times that word appears in a the sentence

// Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo
const findWordFrequency = (str) => {
    let stringSplit = str.split(" ");
    let wordHash = {};

    for(let i = 0; i < stringSplit.length; i++) {

        let word = stringSplit[i];

        if (word in wordHash) {
            wordHash[word] ++;
        } else {
            wordHash[word] = 1;
        }
    }

    return wordHash;
}
// console.log(findWordFrequency("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"));

// Rose rose to look at her rose
const roseToLookAtRose = (str) => {
    let roseHash = {};
    let roseSplitted = str.split(' ')

    for(let i = 0; i < roseSplitted.length; i++) {

        let rose = roseSplitted[i];

        if(rose in roseHash) {
            roseHash[rose] ++;
        } else {
            roseHash[rose] = 1;
        }
    }

    return roseHash;
}
// console.log(roseToLookAtRose("Rose rose to look at her rose"))

//  bond
const bondFilms = [
    {
      title: "Skyfall",
      year: 2012,
      actor: "Daniel Craig",
      gross: "$1,108,561,008",
    },
    {
      title: "Thunderball",
      year: 1965,
      actor: "Sean Connery",
      gross: "$1,014,941,117",
    },
    {
      title: "Goldfinger",
      year: 1964,
      actor: "Sean Connery",
      gross: "$912,257,512",
    },
    {
      title: "Live and Let Die",
      year: 1973,
      actor: "Roger Moore",
      gross: "$825,110,761",
    },
    {
      title: "You Only Live Twice",
      year: 1967,
      actor: "Sean Connery",
      gross: "$756,544,419",
    },
    {
      title: "The Spy Who Loved Me",
      year: 1977,
      actor: "Roger Moore",
      gross: "$692,713,752",
    },
    {
      title: "Casino Royale",
      year: 2006,
      actor: "Daniel Craig",
      gross: "$669,789,482",
    },
    {
      title: "Moonraker",
      year: 1979,
      actor: "Roger Moore",
      gross: "$655,872,400",
    },
    {
      title: "Diamonds Are Forever",
      year: 1971,
      actor: "Sean Connery",
      gross: "$648,514,469",
    },
    {
      title: "Quantum of Solace",
      year: 2008,
      actor: "Daniel Craig",
      gross: "$622,246,378",
    },
    {
      title: "From Russia with Love",
      year: 1963,
      actor: "Sean Connery",
      gross: "$576,277,964",
    },
    {
      title: "Die Another Day",
      year: 2002,
      actor: "Pierce Brosnan",
      gross: "$543,639,638",
    },
    {
      title: "Goldeneye",
      year: 1995,
      actor: "Pierce Brosnan",
      gross: "$529,548,711",
    },
    {
      title: "On Her Majesty's Secret Service",
      year: 1969,
      actor: "George Lazenby",
      gross: "$505,899,782",
    },
    {
      title: "The World is Not Enough",
      year: 1999,
      actor: "Pierce Brosnan",
      gross: "$491,617,153",
    },
    {
      title: "For Your Eyes Only",
      year: 1981,
      actor: "Roger Moore",
      gross: "$486,468,881",
    },
    {
      title: "Tomorrow Never Dies",
      year: 1997,
      actor: "Pierce Brosnan",
      gross: "$478,946,402",
    },
    {
      title: "The Man with the Golden Gun",
      year: 1974,
      actor: "Roger Moore",
      gross: "$448,249,281",
    },
    { title: "Dr. No", year: 1962, actor: "Sean Connery", gross: "$440,759,072" },
    {
      title: "Octopussy",
      year: 1983,
      actor: "Roger Moore",
      gross: "$426,244,352",
    },
    {
      title: "The Living Daylights",
      year: 1987,
      actor: "Timothy Dalton",
      gross: "$381,088,866",
    },
    {
      title: "A View to a Kill",
      year: 1985,
      actor: "Roger Moore",
      gross: "$321,172,633",
    },
    {
      title: "License to Kill",
      year: 1989,
      actor: "Timothy Dalton",
      gross: "$285,157,191",
    },
  ];

// 1. Write a function that takes the Bond movies, and returns a new array of just the titles
const getTheTitlesOfAllBondMovies = (movies) => {
    return movies.map((movie) => movie.title);
}
// console.log(getTheTitlesOfAllBondMovies(bondFilms));


// 2. Write a function that takes the Bond movies, and returns a new array filtering for only movies released before 1990
const filterMoviesOfAParticularYear = (movies) => {
    return movies.filter((movie) => movie.year < 1990);
}
// console.log(filterMoviesOfAParticularYear(bondFilms));

// 3. Write a function that sums the totals of gross to determine the total amount of money these films have generated

const sumTheTotalAmountOfMoneyBondMoviesMade = (movies) => {

    let grossOfMovies = movies.map((movies) => movies.gross);
    
    let cleanedStrNums = grossOfMovies.map((strNums) => {
        let replacedItems = strNums.replace(/[$,]/g, '');
        return parseInt(replacedItems);
    });
    
    return cleanedStrNums.reduce((a, b) => a + b, 0);
}
console.log(sumTheTotalAmountOfMoneyBondMoviesMade(bondFilms))

