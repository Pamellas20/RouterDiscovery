import { Link, useLocation } from "react-router-dom"

function NavBar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? "bg-amber-800 text-white" : "hover:bg-amber-700 hover:text-white"
  }

  return (
    <nav className="bg-amber-200 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-amber-900 font-bold text-xl">
          User Directory
        </Link>

        <div className="flex space-x-4">
          <Link
            to="/users/1"
            className={`px-3 py-2 rounded-md text-sm font-medium text-amber-900 transition-colors ${isActive("/users/1")}`}
          >
            User 1
          </Link>
          <Link
            to="/users/2"
            className={`px-3 py-2 rounded-md text-sm font-medium text-amber-900 transition-colors ${isActive("/users/2")}`}
          >
            User 2
          </Link>
          <Link
            to="/users/3"
            className={`px-3 py-2 rounded-md text-sm font-medium text-amber-900 transition-colors ${isActive("/users/3")}`}
          >
            User 3
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
