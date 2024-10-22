"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  if (!apiKey) {
    throw new Error("No API key");
  }

  if (!apiSecret) {
    throw new Error("No API secret");
  }

  const streamClient = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

  const issued = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.generateUserToken({
    user_id: user.id,
    exp: exp,
    iat: issued,
  });

  return token;
};