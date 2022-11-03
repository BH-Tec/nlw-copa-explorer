function createGame(player1, player2, hour, group) {
  return `
  <li>
    <img
      src="./assets/flags/icon-${player1}.svg"
      alt="Bandeira do ${player1}"
    />
    <strong>${hour}</strong>
    <img
      src="./assets/flags/icon-${player2}.svg"
      alt="Bandeira do ${player2}"
    />
  </li>
  <p>${group}</p>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
<div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span> ${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "argentina", "13:00", "Grupo A") +
      createGame("germany", "england", "16:00", "Grupo A")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("brazil", "germany", "13:00", "Grupo A") +
      createGame("argentina", "england", "16:00", "Grupo A")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("brazil", "germany", "13:00", "Grupo A") +
      createGame("argentina", "england", "16:00", "Grupo A")
  )
