import { existsSync } from 'fs';

import dotEnv from 'dotenv';
import { CodegenConfig } from '@graphql-codegen/cli';

dotEnv.config();

const hasEnvVars = Boolean(process.env.NEXT_PUBLIC_NODE_ENV);

if (!hasEnvVars) {
  const localFile = './.env.local';

  // TODO: This should be dynamic (recieve argument from execution?)
  const vercelEnv = 'development';
  const vercelFile = `./.vercel/.env.${vercelEnv}.local`;

  if (!existsSync(vercelFile) && !existsSync(localFile)) {
    throw new Error(`\
  No environment file found
  tried:
  - ${localFile}
  - ${vercelFile}

  Please run vercel pull to get the file
`);
  }

  const envConfigFile = existsSync(localFile) ? localFile : vercelFile;

  dotEnv.config({ path: envConfigFile });
}

const ENVIRONMENT = process.env.NEXT_PUBLIC_NODE_ENV;

const CONTENTFUL_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_END_POINT = process.env.NEXT_PUBLIC_CONTENTFUL_ENDPOINT;

const CONTENTFUL_URL = `${CONTENTFUL_END_POINT}/content/v1/spaces/${CONTENTFUL_SPACE}/environments/${ENVIRONMENT}`;
const COMMERCE_URL = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [CONTENTFUL_URL]: {
        headers: { Authorization: `Bearer ${CONTENTFUL_TOKEN}` },
      },
    },
    {
      [COMMERCE_URL]: {
        headers: { Authorization: '' },
      },
    },
  ],
  documents: ['gql/queries/**/*.graphql'],
  generates: {
    'gql/generated/graphql.ts': {
        plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-apollo',
        ],
    },
    'schema.graphql': { plugins: ['schema-ast'] },
  },
};

export default config;
