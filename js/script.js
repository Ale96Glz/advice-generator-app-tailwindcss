async function getRandomAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip;
  } catch (error) {
    console.error("Error fetching advice:", error);
    return {
      id: 0,
      advice: "Sorry, an error occurred while fetching the advice.",
    };
  }
}

async function displayAdvice() {
  const { id, advice } = await getRandomAdvice();
  const adviceIdElement = document.getElementById("advice-id");
  const adviceTextElement = document.getElementById("advice-text");

  if (adviceIdElement && adviceTextElement) {
    adviceIdElement.textContent = `Advice #${id}`;
    adviceTextElement.textContent = advice;
  } else {
    console.error(
      'Elements with IDs "advice-id" and "advice-text" not found in the DOM.'
    );
  }
}

document.addEventListener("DOMContentLoaded", displayAdvice);
