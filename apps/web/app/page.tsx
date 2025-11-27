import getUsers from "./getUsers";


export default async function Home() {
  const users = await getUsers();
  return(<div>
    <div>This are the users</div>
   <div>{JSON.stringify(users)}</div>
   </div>
  );
}

export const revalidate=60