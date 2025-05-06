function Home() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">Welcome to User Directory</h1>
      <p className="text-amber-800 mb-8 max-w-2xl mx-auto">
        This is a simple user directory application. Click on any user in the navigation bar to view their profile
        information.
      </p>
      <div className="bg-amber-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-amber-900 mb-3">Getting Started</h2>
        <ul className="text-left text-amber-800 space-y-2">
          <li>• Click on "User 1" to view the first user's profile</li>
          <li>• Click on "User 2" to view the second user's profile</li>
          <li>• Click on "User 3" to view the third user's profile</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
