function createGame(player1, player2, hour) {
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
  `
}

function createCard(date, day, games) {
  return `
<div class="card">
    <h2>${date}<span> ${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo_header.svg" alt="" />
</header>
<main id="cards">
  ${createCard(
    "24/11",
    "quinta",
    createGame("brazil", "argentina", "13:00") +
      createGame("germany", "england", "16:00")
  )}
  ${createCard(
    "25/11",
    "sexta",
    createGame("brazil", "germany", "13:00") +
      createGame("argentina", "england", "16:00")
  )}
  ${createCard(
    "26/11",
    "sabado",
    createGame("argentina", "germany", "13:00") +
      createGame("england", "brazil", "16:00")
  )}
  ${createCard(
    "26/11",
    "sabado",
    createGame("argentina", "germany", "13:00") +
      createGame("england", "brazil", "16:00")
  )}
  ${createCard(
  "26/11",
  "sabado",
  createGame("argentina", "germany", "13:00") +
    createGame("england", "brazil", "16:00")
)}
</main>
`
