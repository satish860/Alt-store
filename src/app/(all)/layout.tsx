import Sidebar from "./components/sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function FoldersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const userName = user?.fullName || "Guest";
  const mail = user?.emailAddresses?.[0]?.emailAddress || "";
  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar name={userName} email={mail} />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
