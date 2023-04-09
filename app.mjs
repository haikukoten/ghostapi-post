import express from 'express';
import { adminApi } from './ghost.mjs';
import { getRandomImage } from './randomImage.mjs';

(async () => {
  await import('dotenv').then((dotenv) => dotenv.config());

  const express = (await import('express')).default;
  const { adminApi } = await import('./ghost.mjs');
  const { getRandomImage } = await import('./randomImage.mjs');

  const app = express();

  app.post('/createRandomPost', async (req, res) => {
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
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
