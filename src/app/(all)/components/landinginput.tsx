"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Landinginput = () => {
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    console.log(email);
    setEmail("")
  };

  return (
    <div className="gap-4 flex items-center w-96 h-10 bg-gray-100 border">
      <Input
        className="bg-transparent"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleButtonClick}>Get Early Access</Button>
    </div>
  );
};

export default Landinginput;
