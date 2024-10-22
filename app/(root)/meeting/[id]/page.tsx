"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import Navbar from "@/components/Navbar";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

import React, { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Meeting = ({ params }: Props) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);

  console.log(isLoaded, isCallLoading);
  if (!isLoaded || isCallLoading) return <Loader />;

  if (!user) {
    return null;
  }

  return (
    <main className="h-screen w-full bg-primary-foreground">
      <Navbar />
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
