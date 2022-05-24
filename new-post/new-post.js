import { createParticipant, getWorkshops } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const workshopEl = document.getElementById('workshops');
const participantForm = document.getElementById('new-participant');

async function loadData() {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopOption = renderOption(workshop);
        workshopEl.append(workshopOption);
    }
}
loadData();