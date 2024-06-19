"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Landinginput = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    // Basic email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleButtonClick = () => {
    if (validateEmail(email)) {
      console.log(email);
      setEmail("");
      setIsValidEmail(true);
      setErrorMessage("");
    } else {
      setIsValidEmail(false);
      setErrorMessage("Enter a valid email address");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue === "") {
      setIsValidEmail(true);
      setErrorMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-96">
      <div
        className={`flex items-center h-10 bg-gray-100 border ${
          isValidEmail ? "border-gray-300" : "border-2 border-red-500"
        }`}
      >
        <Input
          className="bg-transparent flex-1"
          placeholder="Enter email address"
          value={email}
          onChange={handleInputChange}
        />
        <Button
          onClick={handleButtonClick}
          className={`${isValidEmail ? "bg-black" : "bg-red-500 hover:bg-red-600"} text-white`}
        >
          Get Early Access
        </Button>
      </div>
      {!isValidEmail && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};

export default Landinginput;
