function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 25,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a dad joke expert who delivers short and funny dad jokes. Format the joke in HTML like <p>This is a dad joke</p>.";
  let prompt = "Tell me a brand new, short and clever dad joke.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Getting the ultimate dad joke... hang tight.";

  console.log("Calling SheCodes AI for a dad joke...");

  axios
    .get(apiUrl)
    .then(displayJoke)
    .catch((error) => {
      console.error("Error fetching joke:", error);
      jokeElement.innerHTML = "Oops! Something went wrong. Try again.";
    });
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
