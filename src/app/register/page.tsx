"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
import Subfooter from "@/Components/Subfooter"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    try {
      await register(name, email,)
      router.push("/profile")
    } catch {
      setError("Registration failed")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-[#B88E2F] mb-6">Create an Account</h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-lg hover:bg-[#96732a] transition-colors"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#B88E2F] hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Subfooter />
      <Footer />
    </div>
  )
}
