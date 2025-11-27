import getUsers from "./getUsers";


export default async function Home() {
  const users = await getUsers();
  return(
  <div>{JSON.stringify(users)}</div>
  );
}

export const revalidate=60