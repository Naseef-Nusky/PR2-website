import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Not found" />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Page not found</h1>
        <Link to="/" className="btn btn-outline mt-8">
          Return home
        </Link>
      </div>
    </>
  )
}
