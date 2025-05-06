"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
          throw new Error("Failed to fetch user data")
        }

        const userData = await response.json()
        setUser(userData)
        setError(null)
      } catch (err) {
        setError("Error fetching user data. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-amber-800 text-xl">Loading user data...</div>
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">{error}</div>
  }

  if (!user) {
    return (
      <div className="bg-amber-100 border border-amber-400 text-amber-700 px-4 py-3 rounded mt-4">User not found</div>
    )
  }

  return (
    <div className="mt-8">
      <div className="bg-amber-100 rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-amber-900 mb-4">{user.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Contact Information</h2>
            <ul className="space-y-2 text-amber-700">
              <li>
                <span className="font-medium">Username:</span> {user.username}
              </li>
              <li>
                <span className="font-medium">Email:</span> {user.email}
              </li>
              <li>
                <span className="font-medium">Phone:</span> {user.phone}
              </li>
              <li>
                <span className="font-medium">Website:</span> {user.website}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Address</h2>
            <ul className="space-y-2 text-amber-700">
              <li>
                <span className="font-medium">Street:</span> {user.address.street}
              </li>
              <li>
                <span className="font-medium">Suite:</span> {user.address.suite}
              </li>
              <li>
                <span className="font-medium">City:</span> {user.address.city}
              </li>
              <li>
                <span className="font-medium">Zipcode:</span> {user.address.zipcode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-amber-800 mb-2">Company</h2>
          <ul className="space-y-2 text-amber-700">
            <li>
              <span className="font-medium">Name:</span> {user.company.name}
            </li>
            <li>
              <span className="font-medium">Catch Phrase:</span> {user.company.catchPhrase}
            </li>
            <li>
              <span className="font-medium">BS:</span> {user.company.bs}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
