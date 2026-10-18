// 30 dias em milissegundos (30 dias * 24h * 60m * 60s * 1000ms)
const mes = 30 * 24 * 60 * 60 * 1000;

// Obtém a data limite salva no localStorage
let endDate = Number(localStorage.getItem("driftOfferEnd"));

// Se não existir ou se já tiver passado, gera uma nova data limite de +30 dias
if (!endDate || endDate <= Date.now()) {
  endDate = Date.now() + mes;
  localStorage.setItem("driftOfferEnd", endDate);
}

function updateCounter() {
  const now = Date.now();
  let distance = endDate - now;

  // Quando chegar a zero, reinicia automaticamente para 30 dias
  if (distance <= 0) {
    endDate = Date.now() + mes;
    localStorage.setItem("driftOfferEnd", endDate);
    distance = endDate - now;
  }

  // Cálculos do tempo restante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Atualiza os elementos no HTML usando os IDs exatos
  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

// Atualiza a cada segundo e executa imediatamente
setInterval(updateCounter, 1000);
updateCounter();