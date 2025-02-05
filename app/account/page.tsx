"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"

export default function AccountPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { login, register, isLoading } = useAuth()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const [registerEmail, setRegisterEmail] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(loginData.email, loginData.password)
      toast({
        title: "Success",
        description: "You have been logged in successfully.",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await register(registerEmail)
      toast({
        title: "Success",
        description: "Registration link has been sent to your email.",
      })
      setRegisterEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Registration failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />

      {/* Hero Section with Background */}
      <div className="relative h-[240px] bg-[url('https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQPrH-LHXX0zenSKKpc-sLIci25MKO3puyNqtuDGzng-za0mXDnFK~fdrnRrE11Rr4bvNl6mDm~jJNVEG61IP-v5hgG6yUjvY8058T45TF4DFTT14kAwRn8yQ7BDcfCa88z8QPgDH8yKa~ISZcnw~zs1ajnNVRtP1NaUf47VtVxrLaPi0mTSld4s9pOdZmhcvJUAAqsMTVmccLu-2sBaAkTOmyTqahZgwFt97jKivFT2MNcojQ4hebN2PGEtHrdmSuq0nDd-Wq0ro5FIpGW1e2p5Kj4-0mdM03mBWxQpQL8KfeyIXKUnG~QTfT3rbVQcC3DHxifSrqXxW8K2JVyZPw__')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">My Account</h1>
          <div className="flex items-center gap-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>My account</span>
          </div>
        </div>
      </div>

      {/* Login/Register Forms */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Login Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Log In</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="login-email">Username or email address</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={loginData.remember}
                  onCheckedChange={(checked) => setLoginData({ ...loginData, remember: checked as boolean })}
                  disabled={isLoading}
                />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>

              <div className="space-y-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Log In"}
                </Button>
                <Button variant="link" className="p-0 h-auto">
                  Lost Your Password?
                </Button>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Register</h2>
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="register-email">Email address</Label>
                <Input
                  id="register-email"
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <p className="text-sm text-gray-600">A link to set a new password will be sent to your email address.</p>

              <p className="text-sm text-gray-600">
                Your personal data will be used to support your experience throughout this website, to manage access to
                your account, and for other purposes described in our{" "}
                <Link href="/privacy-policy" className="underline">
                  privacy policy
                </Link>
                .
              </p>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  )
}

