import { getLatestUsers } from "@/lib/actions/users.actions";
import { UserOutput } from "@/types/user";

export default async function HomePage() {
  const latestUsers = await getLatestUsers();
  

  // Extract the first (and only) user from the array
  const latestUser = latestUsers[0];

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest User</h2>
      {latestUser ? <UserCard user={latestUser} /> : <p>No user found</p>}
    </div>
  );
}

function UserCard({ user }: { user: UserOutput }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "0.5rem 0",
        padding: "0.5rem",
      }}
    >
      <h2>Name: {user.name}</h2>
      <p>Role: {user.role}</p>
      {user.email && <p>Email: {user.email}</p>}
      <p>Phone: {user.phone || "N/A"}</p>
      <p>Language: {user.language || "N/A"}</p>
    </div>
  );
}
