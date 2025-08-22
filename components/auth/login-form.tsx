'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const LoginForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    interface LoginFormEvent extends React.FormEvent<HTMLFormElement> {}

    const handleLogin = (e: LoginFormEvent): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        fetch("http://localhost:8001/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                if (data.success) {
                    router.push('/dashboard');
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8001/v1/auth/google/login";
    }
    const handleGithubLogin = () => {
    window.location.href = "http://localhost:8001/v1/auth/github/login";
  }

  const handleLinkedInLogin = () => {
    window.location.href = "http://localhost:8001/v1/auth/linkedin/login";
  }
  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:8001/v1/auth/facebook/login";
  }

    return(
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Link href="/">
                <Image
                src="/images/ride.png"
                alt="GoRide Logo"
                width={80}
                height={80}
                priority
                className="rounded-full hover:opacity-80 transition"
                />
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-primary">GoRide</CardTitle>
        </CardHeader>
        <CardContent>
          <form 
            onSubmit={(e) => handleLogin(e)}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" className="ride-input" required />
            </div>
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input id="password" 
                     name="password"
                     type={showPassword ? "text" : "password"} 
                     placeholder="••••••••" 
                     className="ride-input" 
                     required 
               />
              <button type="button" 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute top-9 right-2 -translate-y-1/4 transform"
               >
                {showPassword ? <EyeIcon className="w-5 h-5 text-muted-foreground" /> : <EyeOffIcon className="w-5 h-5 text-muted-foreground" />}
              </button>
            </div>
            <Button type="submit" className="w-full ride-button-primary">Login</Button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-sm text-muted-foreground">or continue with</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
            >
              <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGithubLogin}
            >
              <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
              Continue with GitHub
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleLinkedInLogin}
            >
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              Continue with LinkedIn
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleFacebookLogin}
            >
              <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              Continue with Facebook
            </Button>

          </div>          

          <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{' '}
            <Link href="/auth/register" className="text-primary underline">Register now</Link>
          </p>
        </CardContent>
        <div className="mb-4">
            <p className="text-center text-sm text-muted-foreground mt-4">
                <Link href="/" className="underline text-primary">return home</Link>
            </p>
        </div>

      </Card>
    </div>
    )
}