import {db} from 'db/client'
export default async function getUsers(){
    const users = await db.user.findMany();
    return users;
}