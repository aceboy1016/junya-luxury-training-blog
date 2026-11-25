import { createClient } from '@sanity/client'
import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())
const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset, SANITY_API_TOKEN: token } = process.env
if (!projectId || !dataset || !token) throw new Error('Set the Sanity project ID, dataset and API token in .env.local first.')
const client = createClient({projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false})
const categories = [['training', 'Training Method'], ['nutrition', 'Performance Meal'], ['lifestyle', 'Mind & Lifestyle']]
let transaction = client.transaction()
for (const [order, [slug, title]] of categories.entries()) {
  transaction = transaction.createIfNotExists({_id: `category-${slug}`, _type: 'category', title, slug: {_type: 'slug', current: slug}, color: '#4A98D0', order, isActive: true})
}
transaction = transaction.createIfNotExists({_id: 'author-junya-ishihara', _type: 'author', name: '石原 淳哉', slug: {_type: 'slug', current: 'junya-ishihara'}, isActive: true})
await transaction.commit()
console.log('Initial categories and author are ready. Existing documents were preserved.')
