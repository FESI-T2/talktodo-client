import { LexRuntimeV2Client } from '@aws-sdk/client-lex-runtime-v2';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

export const lexClient = new LexRuntimeV2Client({
  region: process.env.NEXT_PUBLIC_REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: process.env.NEXT_PUBLIC_REGION },
    identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID!,
  }),
});
