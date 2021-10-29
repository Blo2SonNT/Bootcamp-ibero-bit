let nombres = ["andres", "alejandro", "Manuela", "Tatiana", "Katherine"]

nombres.forEach(function(mis_amigos) {
    document.getElementById("ejemplo").innerHTML += `
    ${mis_amigos} <br>
    `
});