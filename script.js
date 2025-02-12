let yesButtonSize = 16;
let messageIndex = 0;

const messages = [
    "Falsche Wahl! 😈",
    "Bist du dir sicher? 🥺",
    "Komm schon, sag Ja! ❤️",
    "Ich warte... ⏳",
    "Nein gibt es nicht! 🤭",
    "Der Ja-Button übernimmt bald die Seite! 😆",
    "Haha, gib auf! 😜"
];

function showConfirmation() {
    document.getElementById("question").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

function increaseYesButton() {
    yesButtonSize += 5;
    document.getElementById("yesButton").style.fontSize = yesButtonSize + "px";

    document.getElementById("message").innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length; // Rotiere durch die Nachrichten
}

function downloadCalendarEvent() {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Valentinstagsdate in der L’Osteria 💖
DESCRIPTION:Dein Date beginnt um 18:00 Uhr in der L’Osteria. Dresscode: Schick & elegant!
LOCATION:L’Osteria Augsburg
DTSTART:20240214T180000
DTEND:20240214T200000
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "valentinstagsdate.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

