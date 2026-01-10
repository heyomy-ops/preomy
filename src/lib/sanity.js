import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: 'xvknnjxr',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Fetch all projects
export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    location,
    area,
    style,
    description,
    "images": images[].asset->url
  }`;
  
  return client.fetch(query);
}

// Fetch single project by slug
export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    location,
    area,
    style,
    description,
    "images": images[].asset->url
  }`;
  
  return client.fetch(query, { slug });
}
