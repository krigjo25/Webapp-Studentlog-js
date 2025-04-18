function choreiView() {
    console.log('choreiView is being called');
    const html = /*HTML*/`
    <div class="chorei-view">
        <h1>Chorei område:</h1>
        <div>
            <button onclick="navigateToChoreiView('chorei')">Chorei</button>
            <button onclick="navigateToChoreiView('journal')">Logg</button>
            <button onclick="navigateToChoreiView('moodle')">Moodle</button>
        </div>
        <div>
            <h2>Dagens Chorei:</h2>
            <div>
                <label for="choreiNote1">Dagens generelle erfaringer (humør / etc)</label>
                <textarea id="choreiNote1" oninput="model.input.choreiPage.mood = this.value"></textarea>
            </div>
            <div>
                <label for="choreiNote2">Dagens samarbeid erfaring </label>
                <textarea id="choreiNote2" oninput="model.input.choreiPage.collabration = this.value"></textarea>
            </div>
            <div>
                <label for="choreiNote3">Dagens Proffesjonell vekst erfaring</label>
                <textarea id="choreiNote3" oninput="model.input.choreiPage.chorei = this.value"></textarea>
            </div>
            <div>
                <label for="choreiNote4">Dagens kode erfaring</label>
                <textarea id="choreiNote4" oninput="model.input.choreiPage.code = this.value"></textarea>
            </div>
            <button onclick="saveChoreiNotes()">Lagre Chorei</button>
        </div>
        <div>
            <h2>Relatert info for i dag:</h2>
            <ul>
                <li>Psykologisk trygghet</li>
                <li>Locus of Control</li>
                <li>Growth mindset</li>
                <li>Focused and Diffused brain mode</li>
                <li>Pomodoro teknikk</li>
            </ul>
        </div>
        <div>
            <h2>Chorei arkiv:</h2>
            <table>
                <tr>
                    <th>Chorei Nummer</th>
                    <th>Dato</th>
                </tr>
                ${model.data.archive.map(archive => `
                    <tr>
                        <td>${archive.name}</td>
                        <td>${archive.date}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}