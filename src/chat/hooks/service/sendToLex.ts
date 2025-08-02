import { RecognizeTextCommand } from '@aws-sdk/client-lex-runtime-v2';
import type { RecognizeTextCommandOutput } from '@aws-sdk/client-lex-runtime-v2';

import { lexClient } from '@/chat/lib/lexClient';

export const sendToLex = async (text: string, sessionId: string): Promise<RecognizeTextCommandOutput> => {
  const command = new RecognizeTextCommand({
    botId: process.env.NEXT_PUBLIC_BOT_ID,
    botAliasId: process.env.NEXT_PUBLIC_BOT_ALIAS_ID,
    localeId: process.env.NEXT_PUBLIC_LOCAL_ID,
    sessionId,
    text,
  });

  return await lexClient.send(command);
};
