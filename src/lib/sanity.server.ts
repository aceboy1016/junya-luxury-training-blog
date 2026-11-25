import 'server-only'
import { createClient } from '@sanity/client'

export function getWriteClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN
  if (!projectId || !dataset || !token) return null
  return createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false, perspective: 'published' })
}
