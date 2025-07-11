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
        // Handle login logic here
        e.preventDefault();   
        router.push('/dashboard');
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
              <Input id="email" type="email" placeholder="you@example.com" className="ride-input" required />
            </div>
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input id="password" 
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