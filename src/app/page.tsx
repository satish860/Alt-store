import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
      <Button>Click me</Button>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}
