import { type Config } from 'drizzle-kit';
import '~/db/envConfig';
export default {
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  tablesFilter: ['auth_workflow_*'],
} satisfies Config;
