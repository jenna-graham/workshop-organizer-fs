import { getWorkshops, checkAuth, deleteParticipant, logout, getUser, } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const addNewButton = document.getElementById('add');

logoutButton.addEventListener('click', () => {
    logout();
});
addNewButton.addEventListener('click', () => {
    const user = getUser();
    console.log('clicking button');
    if (user) {
        return location.assign('/new-post');
    } else {
        return location.assign('/');
    }
    

});

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent = '';
    const workshopData = await getWorkshops();
    for (let workshop of workshopData) {
        const workshopEl = renderWorkshop(workshop);

        const ul = document.createElement('ul');
        for (let participant of workshop.participants) {
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact_info}`;
            li.addEventListener('click', async () => {
                console.log('clicking participant id:', participant.id);
                await deleteParticipant(participant.id);
                await displayWorkshops();
                
            });
            ul.append(li);
        }
        workshopEl.append(ul);
        main.append(workshopEl);
    }
}
displayWorkshops();