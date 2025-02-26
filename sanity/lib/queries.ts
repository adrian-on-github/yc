import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id, 
  slug, 
  title,
  views, description,
  _createdAt, 
  author -> {
    _id, name, image, bio
  },
  category, 
  image
}`);
