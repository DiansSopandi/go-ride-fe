'use client'

import { useState } from "react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { config } from "@/config"

export const LoginForm = () => {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    interface LoginFormEvent extends React.FormEvent<HTMLFormElement> {}

    const handleLogin = (e: LoginFormEvent): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        fetch(`${config.apiUrl}/auth/login`, {
            method: "POST",
            credentials: "include",
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
        window.location.href = `${config.apiUrl}/auth/google/login`;
    }
    const handleGithubLogin = () => {
    window.location.href = `${config.apiUrl}/auth/github/login`;
  }

  const handleLinkedInLogin = () => {
    window.location.href = `${config.apiUrl}/auth/linkedin/login`;
  }
  const handleFacebookLogin = () => {
    window.location.href = `${config.apiUrl}/auth/facebook/login`;
  }


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
        Welcome Back
      </h2>            

      <p className="text-sm text-muted-foreground text-center">
            Login to your account
      </p>      

      <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}        
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Q2Sb9@example.com" />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>  

          <Button type="submit" className="w-full">Login</Button>                          
      </form>      

      {/* Divider */}
      <div className="flex items-center my-6">
         <div className="flex-grow border-t border-gray-300" />
         <span className="px-3 text-sm text-muted-foreground">or continue with</span>
         <div className="flex-grow border-t border-gray-300" />
      </div>   

          {/* Social Login */}
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

          {/* Register link */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>           

    </div>
  )
}
