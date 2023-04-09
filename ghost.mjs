// ghost.mjs
import { config } from 'dotenv';
config();

import GhostContentAPI from '@tryghost/content-api';
import GhostAdminAPI from '@tryghost/admin-api';

const contentApi = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v4.0',
});

const adminApi = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: process.env.GHOST_ADMIN_API_VERSION,
});

export { contentApi, adminApi };
