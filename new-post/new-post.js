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

participantForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(participantForm);
    console.log(form.get('workshop_id'));
    await createParticipant({
        name: form.get('name'),
        contact_info: form.get('contact'),
        workshop_id: form.get('workshop_id'),
    });
    window.location.href = '/workshops';
    
});