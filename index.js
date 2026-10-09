setInterval( updateTime, 1000);
var biggestIndex = 3;
var selectedIcon = undefined;
var topBar = document.querySelector("#taskbar");

//window dragging
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("music"));
dragElement(document.getElementById("calculator"));
dragElement(document.getElementById("browser"));
dragElement(document.getElementById("pomo"));
dragElement(document.getElementById("weather"));



// code to open and close welcome screen
var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#closeWelcomeTab");
var welcomeScreenOpen = document.querySelector("#openWelcomeTab");


welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen)
})
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen)
})

// code to open and close notes app
var notesScreen = document.querySelector("#notes");
var notesScreenClose = document.querySelector("#close-notes-tab");
var notesScreenOpen = document.querySelector("#open-notes-tab");
notesScreenClose.addEventListener("click", function() {
  closeWindow(notesScreen)
})
notesScreenOpen.addEventListener("click", function() {
  openWindow(notesScreen)
})

var musicScreen = document.querySelector("#music");
var musicScreenClose = document.querySelector("#close-music-tab");
var musicScreenOpen = document.querySelector("#open-music-tab");
musicScreenClose.addEventListener("click", function() {
  closeWindow(musicScreen)
})
musicScreenOpen.addEventListener("click", function() {
  openWindow(musicScreen)
})

var calculatorScreen = document.querySelector("#calculator");
var calculatorScreenClose = document.querySelector("#close-calculator-tab");
var calculatorScreenOpen = document.querySelector("#open-calculator-tab");
calculatorScreenClose.addEventListener("click", function() {
  closeWindow(calculatorScreen)
})
calculatorScreenOpen.addEventListener("click", function() {
  openWindow(calculatorScreen)
})

var browserScreen = document.querySelector("#browser");
var browserScreenClose = document.querySelector("#close-browser-tab");
var browserScreenOpen = document.querySelector("#open-browser-tab");
browserScreenClose.addEventListener("click", function() {
  closeWindow(browserScreen)
})
browserScreenOpen.addEventListener("click", function() {
  openWindow(browserScreen)
})

var pomoScreen = document.querySelector("#pomo");
var pomoScreenClose = document.querySelector("#close-pomo-tab");
var pomoScreenOpen = document.querySelector("#open-pomo-tab");
pomoScreenClose.addEventListener("click", function() {
  closeWindow(pomoScreen)
})
pomoScreenOpen.addEventListener("click", function() {
  openWindow(pomoScreen)
})


var weatherScreen = document.querySelector("#weather");
var weatherScreenClose = document.querySelector("#close-weather-tab");
var weatherScreenOpen = document.querySelector("#open-weather-tab");
weatherScreenClose.addEventListener("click", function() {
  closeWindow(weatherScreen)
})
weatherScreenOpen.addEventListener("click", function() {
  openWindow(weatherScreen)
})




// move clicked window to the front of screen
windowTapHandling(notesScreen)
windowTapHandling(musicScreen)
windowTapHandling(calculatorScreen)
windowTapHandling(browserScreen)
windowTapHandling(welcomeScreen)
windowTapHandling(pomoScreen)
windowTapHandling(weatherScreen)


document.querySelector("#notesapp").addEventListener("click", function() {
  handleIconTap(document.querySelector("#notesapp"));
});

document.querySelector("#musicapp").addEventListener("click", function() {
  handleIconTap(document.querySelector("#musicapp"));
});

document.querySelector("#calculatorapp").addEventListener("click", function() {
  handleIconTap(document.querySelector("#calculatorapp"));
});

document.querySelector("#browserapp").addEventListener("click", function() {
  handleIconTap(document.querySelector("#browserapp"));
});

document.querySelector("#pomoapp").addEventListener("click", function() {
  handleIconTap(document.querySelector("#pomoapp"));
});


document.querySelector("#weatherapp").addEventListener("click", function() {
  handleIconTap(document.querySelector("#weatherapp"));
});


function windowTapHandling(element) {
  element.addEventListener("mousedown", function() {
    handleWindowTap(element);
  })
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon);
}



function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
    openWindow(window);
  }
  else {
    selectIcon(element);
  }
}

function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector(".time-now");
    timeText.innerHTML = currentTime;
}

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};


//code for calculator app

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
 
}

function clearDisplay(input) {
  display.value = "";
}

function calculate() {
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error"
  }
}

//code for music app

const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song")
const shuffleButton = document.getElementById("shuffle-song");
const replayButton = document.getElementById("replay-song")

const songs = [
  {
    image: "./images/music-image.png",
    name: "Can You Hear The Music",
    artist: "Ludwig Göransson",
    audio: "./music/canyouhearthemusic.mp3"
  },
  {
    image: "./images/music-image.png",
    name: "Champagne Coast",
    artist: "Blood Orange",
    audio: "./music/champagnecoast.mp3"
  },
  {
    image: "./images/music-image.png",
    name: "Quantum Mechanics",
    artist: "Ludwig Göransson",
    audio: "./music/quantummechanics.mp3"
  },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
var songRepeat = false;
updateSong();

prevSongButton.addEventListener("click", function() {
  if (currentSongIndex == 0) {
    return;
  }
  currentSongIndex--;
  updateSong();
});

nextSongButton.addEventListener("click", function() {
  if (currentSongIndex == songs.length - 1) {
    return;
  }
  currentSongIndex++;
  updateSong();
});

playpauseButton.addEventListener("click", function() {
  if (!audio.paused) {
    audio.pause();
    playpauseButton.innerHTML = "▶"
  }
  else {
    audio.play();
    playpauseButton.innerHTML = "|| "
  }
});

shuffleButton.addEventListener("click", function() {
  var randomInteger = Math.floor(Math.random() * (songs.length));
  currentSongIndex = randomInteger;
  updateSong();
});

replayButton.addEventListener("click", function() {
  if (songRepeat == false) {
    songRepeat = true;
    replayButton.innerHTML = "*";
    audio.addEventListener('ended', function() {
      audio.play()
    });
  }
  else {
    songRepeat = false;
    replayButton.innerHTML = "↻"
  }
});

function updateSong() {
  const song = songs[currentSongIndex];
  songImage.src = song.image;
  songName.innerText = song.name;
  songArtist.innerText = song.artist;
  audio.src = song.audio;
  audio.onloadedmetadata = function() {
    songSlider.value = 0;
    songSlider.max = audio.duration;
  }
}

songSlider.addEventListener("change", function() {
  audio.currentTime = songSlider.value;
})

function moveSlider() {
  songSlider.value = audio.currentTime;
};

setInterval(moveSlider, 1000)


//code for notes app

const notesContainer = document.getElementById("notes-content");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}
function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Delete the sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}

// code for pomodoro app //

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const pomoTimer = document.getElementById("pomo-timer");


let timeLeft = 1500;
let interval


function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = minutes + ":" + seconds;

  pomoTimer.innerHTML = formattedTime;

  //pomoTimer.innerHTML = 
  //`${minutes.toString().padStart(2,"0")}
  //:
  //${seconds.toString().padStart(2,"0")}:${seconds}`;
};

function startTimer() {
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();

      if (timeLeft === 0) {
        clearInterval(interval);
        alert("Study Session's over!");
        timeLeft = 1500;
        updateTimer();
      }

  }, 1000);
};

function stopTimer() {
  clearInterval(interval)
};

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  pomoTimer.innerHTML = "25:00";
};


startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);





//weather app

const weatherCodeMap = {
    0: ["Clear Sky", "./images/sun.png"],
    1: ["Mainly Clear", "./images/sun.png"],
    2: ["Partly Cloudy", "./images/cloudy.png"],
    3: ["Overcast", "./images/cloudy.png"],
    45: ["Fog", "./images/fog.png"],
    48: ["Depositing Rime Fog", "./images/fog.png"],
    51: ["Light Drizzle", "./images/rain.png"],
    53: ["Moderate Drizzle", "./images/rain.png"],
    55: ["Dense Drizzle", "./images/rain.png"],
    56: ["Light Freezing Drizzle", "./images/rain.png"],
    57: ["Dense Freezing Drizzle", "./images/rain.png"],
    61: ["Slight Rain", "./images/rain.png"],
    63: ["Moderate Rain", "./images/rain.png"],
    65: ["Heavy Rain", "./images/rain.png"],
    66: ["Light Freezing Rain", "./images/rain.png"],
    67: ["Dense Freezing Rain", "./images/rain.png"],
    71: ["Light Snow", "./images/snow.png"],
    73: ["Moderate Snow", "./images/snow.png"],
    75: ["Heavy Snow", "./images/snow.png"],
    77: ["Snow Grains", "./images/snow.png"],
    80: ["Slight Rain Showers", "./images/rain.png"],
    81: ["Moderate Rain Showers", "./images/rain.png"],
    82: ["Violent Rain Showers", "./images/rain.png"],
    85: ["Slight Snow Showers", "./images/snow.png"],
    86: ["Heavy Snow Showers", "./images/snow.png"],
    95: ["Thunderstorm", "./images/thunderstorm.png"],
    96: ["Thunderstorm With Slight Hail", "./images/thunderstorm.png"],
    99: ["Thunderstorm With Heavy Hail", "./images/thunderstorm.png"]
};

const cityInput = document.getElementById("weather-city-input");
const searchButton = document.getElementById("weather-search-button");
searchButton.addEventListener("click", getWeather)

async function getWeather() {
  const city = cityInput.value.trim();

  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
  const geoResponse = await fetch(geoUrl);
  const geoData = await geoResponse.json();
  console.log(geoData);

  const latitude = geoData.results[0].latitude;
  const longitude = geoData.results[0].longitude;
  const country = geoData.results[0].country;

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const weatherResponse = await fetch(weatherUrl);
  const weatherData = await weatherResponse.json();
  console.log(weatherData)

  const temperature = weatherData.current_weather.temperature;
  const windSpeed = weatherData.current_weather.windspeed;
  const weatherCode = weatherData.current_weather.weathercode;
  const [weatherCondition, weatherImage] = weatherCodeMap[weatherCode];

  document.getElementById("weather-image").src = weatherImage;
  document.getElementById("weather-temperature").innerText = temperature;
  document.getElementById("weather-windspeed").innerText = windSpeed;
  document.getElementById("weather-condition").innerText = weatherCondition;
  document.getElementById("weather-city").innerText = city
}


// date widget

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
document.getElementById("date-widget-text").innerText = today;

 // clock widget

function clockWidget() {
  var h = document.getElementById("hour-hand");
  var m = document.getElementById("minute-hand")

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  hourRotation = 30 * hours + minutes/2;
  minRotation = 6 * minutes

  h.style.transform = `rotate(${hourRotation}deg)`;
  m.style.transform = `rotate(${minRotation}deg)`;
}

setInterval(clockWidget, 1000)








