const BASE_URL = "http://localhost:8080/admin/"
import {unstable_cache as noStore} from 'next/cache';
export async function fetchUsers() {
    try {
        const fetchCountUsers = fetch(BASE_URL+"countUsers",{
            method:'GET',
            mode:'cors',
            cache:'no-store'
        });
        const fetchRegisterUsers =  fetch(BASE_URL+"registerUsers",{
            method:'GET',
            mode:'cors',
            cache:'no-store'
        });
        const fetchUserActive =  fetch(BASE_URL+"usersActive",{
            method:'GET',
            mode:'cors',
            cache:'no-store'
        });
        const fetchUsersInactive = fetch(BASE_URL+"usersInactive",{
            method :'GET',
            mode:'cors',
            cache:'no-store'
        });
        const data = await Promise.all([
            fetchCountUsers,
            fetchRegisterUsers,
            fetchUserActive,
            fetchUsersInactive
        ]);
        const countUsers = await data[0].json();
        const registerUsers = await data[1].json();
        const usersActive = await data[2].json();
        const usersInactive = await data[3].json();
        return {
            countUsers, registerUsers, usersActive, usersInactive
        }
    } catch (err) {
        return err;
    }
}