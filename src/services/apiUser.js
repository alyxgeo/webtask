
const API_URL = 'https://reqres.in/api/users';


//fetching user data from the api
export async function getUser() {

    const res = await fetch(`${API_URL}`);

    if (!res.ok) throw Error('Failed getting menu');

    const { data } = await res.json();
    return data;
}

