// Référence de la div qui va afficher les logs
const consoleOutput = document.getElementById("consoleOutput");

// Sauvegarde de l'ancienne fonction console.log pour la conserver
const originalConsoleLog = console.log;

// Redéfinition de console.log
console.log = function (message) {
    // Affiche le message dans la div
    const newEntry = document.createElement("p");
    newEntry.textContent = "> " + message;
    consoleOutput.appendChild(newEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;

    // Appelle l'ancienne fonction console.log pour le log dans la console du navigateur
    originalConsoleLog.apply(console, arguments);
};

// Exemple d'utilisation
console.log("Bienvenue dans la console en ligne !");
console.log("Chaque console.log() s'affichera ici.");
