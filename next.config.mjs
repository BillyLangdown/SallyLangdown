import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the tracing root to this project directory, not a parent with another lockfile
  outputFileTracingRoot: __dirname,
}

export default nextConfig
