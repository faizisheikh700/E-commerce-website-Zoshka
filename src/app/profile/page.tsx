"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"
import Subfooter from "@/Components/Subfooter"

export default function Profile() {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push("/login")
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#B88E2F] mb-6">Your Profile</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-gray-600">{user.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Account Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => router.push("/orders")}
                    className="flex-1 bg-white text-[#B88E2F] border border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition-colors"
                  >
                    View Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-[#B88E2F] text-white py-2 px-4 rounded-lg hover:bg-[#96732a] transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subfooter />
      <Footer />
    </div>
  )
}

