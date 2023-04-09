// pages/api/createRandomPost.js
import { adminApi } from '../../lib/ghost';
import { getRandomImage } from '../../lib/randomImage';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const randomImage = await getRandomImage();

      const post = await adminApi.posts.add({
        title: 'Random Post',
        content: 'This is a random post.',
        feature_image: randomImage,
        status: 'published',
      });

      res.status(200).json({ message: 'Post created', post });
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
