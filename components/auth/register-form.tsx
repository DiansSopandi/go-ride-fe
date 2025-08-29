"use client";

import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { config } from "next/dist/build/templates/pages";

export const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const res = await fetch("http://localhost:8001/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password,
      }),
    });

    const data = await res.json();
    if (data.success) {
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  // SSO handlers
  const handleGoogleLogin = () =>
    (window.location.href = `${config.apiUrl}/auth/google/login`);
  const handleGithubLogin = () =>
    (window.location.href = `${config.apiUrl}/auth/github/login`);
  const handleLinkedInLogin = () =>
    (window.location.href = `${config.apiUrl}/auth/linkedin/login`);
  const handleFacebookLogin = () =>
    (window.location.href = `${config.apiUrl}/auth/facebook/login`);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-6">
        <Link href="/">
          <Image
            src="/images/ride.png"
            alt="GoRide Logo"
            width={70}
            height={70}
            priority
            className="rounded-full hover:opacity-80 transition"
          />
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">
        Create your GoRide account
      </h2>

      <form onSubmit={handleRegister} className="space-y-5">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" placeholder="John Doe" required />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+62 812-3456-7890" required />
        </div>

        <div className="relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-9 right-3"
          >
            {showPassword ? (
              <EyeIcon className="w-5 h-5 text-gray-400" />
            ) : (
              <EyeOffIcon className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>

        <div className="relative">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-9 right-3"
          >
            {showConfirmPassword ? (
              <EyeIcon className="w-5 h-5 text-gray-400" />
            ) : (
              <EyeOffIcon className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>

        <Button type="submit" className="w-full">Register</Button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-sm text-gray-500">or sign up with</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* SSO buttons */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full flex gap-2" onClick={handleGoogleLogin}>
          <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
          Sign up with Google
        </Button>
        <Button variant="outline" className="w-full flex gap-2" onClick={handleGithubLogin}>
          <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
          Sign up with GitHub
        </Button>
        <Button variant="outline" className="w-full flex gap-2" onClick={handleLinkedInLogin}>
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          Sign up with LinkedIn
        </Button>
        <Button variant="outline" className="w-full flex gap-2" onClick={handleFacebookLogin}>
          <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
          Sign up with Facebook
        </Button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-green-600 underline">
          Login here
        </Link>
      </p>

      <p className="text-center text-sm text-gray-500 mt-4">
        <Link href="/" className="underline text-green-600">
          return home
        </Link>
      </p>
    </div>
  );
};
