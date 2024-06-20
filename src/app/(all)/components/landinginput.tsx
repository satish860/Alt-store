"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import confetti from "canvas-confetti";

const Landinginput = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    // Basic email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleButtonClick = () => {
    if (validateEmail(email)) {
      console.log(email);
      setEmail("");
      setIsValidEmail(true);
      setErrorMessage("");
      setSuccessMessage("Email received");
      triggerConfetti();
      setTimeout(() => {
        setSuccessMessage("");
      }, 10000);
    } else {
      setIsValidEmail(false);
      setErrorMessage("This is not a valid email");
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue === "") {
      setIsValidEmail(true);
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-96">
      <div
        className={`flex items-center h-10 bg-gray-100 border ${
          isValidEmail ? "border-gray-300" : "border-red-500"
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
          className={`${
            isValidEmail ? "bg-black" : "bg-red-500 hover:bg-red-600"
          } text-white`}
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
