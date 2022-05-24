const SUPABASE_URL = 'https://icyrbwltlybmigeljxmh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljeXJid2x0bHlibWlnZWxqeG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMxMzMsImV4cCI6MTk2Nzg3OTEzM30.kUzjWO4wi0A9AVcWdFt_BG9uq-HBZoAR2aZ4IRN55yw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }

}
export async function createParticipant(participant) {
    const response = await client.from('participants').insert(participant);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}