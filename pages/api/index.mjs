// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  async function createRandomPost() {
    try {
      const response = await fetch('/api/createRandomPost', { method: 'POST' });
      const data = await response.json();
      router.push(`/posts/${data.post.slug}`);
    } catch (error) {
      console

