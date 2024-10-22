"use client";

import React from "react";
import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PersonalRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <Card className="flex w-full  flex-col gap-8 xl:max-w-[900px]">
        <CardHeader>
          <CardTitle className="text-xl font-bold lg:text-3xl">
            Personal Meeting Room
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-9">
          <Table
            title="Topic"
            description={`${user?.username}'s Meeting Room`}
          />
          <Table title="Meeting ID" description={meetingId!} />
          <Table title="Invite Link" description={meetingLink} />
          <div className="flex gap-5">
            <Button className="bg-primary font-bold" onClick={startRoom}>
              Start Meeting
            </Button>
            <Button
              className="bg-muted-foreground"
              onClick={() => {
                navigator.clipboard.writeText(meetingLink);
                toast({
                  title: "Link Copied",
                });
              }}
            >
              Copy Invitation
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PersonalRoom;
