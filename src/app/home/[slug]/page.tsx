'use client';

import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const page = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  // ----------------------AGORA RTC LOGIC ---------------------------

  const appId = process.env.AGORA_APPId as string;
  const token = process.env.AGORA_TOKEN as string;

  const [userId, setUserId] = useState(null);

  const [RTCuid, setRTCuid] = useState<number>();

  const rtcUid = Math.floor(Math.random() * 1000);
  console.log(rtcUid);

  const roomId = slug as string;

  let rtcClient;

  let audioTracks: {
    localAudioTrack: any;
    remoteAudioTracks: { [key: string]: any };
  } = {
    localAudioTrack: null,
    remoteAudioTracks: {},
  };

  const handleUserJoined = async (user: any) => {
    setUserId(user.uid);

    console.log('USER -> ', user);
    console.log('USER UID -> ', user.uid);
  };

  const handleUserPublished = async ({ user, mediaType }: any) => {
    if (mediaType === 'audio') {
      audioTracks.remoteAudioTracks[user.uid] = user.audioTrack;
      user.audioTrack.play();
    }
  };

  const handleUserLeft = async (user: any) => {
    if (audioTracks.remoteAudioTracks[user.uid]) {
      audioTracks.remoteAudioTracks[user.uid].stop();
      delete audioTracks.remoteAudioTracks[user.uid];

      setUserId(null);
      router.push('/home');
    }
  };

  const initRTC = async () => {
    rtcClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

    rtcClient.on('user-joined', handleUserJoined);
    rtcClient.on('user-published', handleUserPublished);
    rtcClient.on('user-left', handleUserLeft);

    await rtcClient.join(appId, roomId, token, rtcUid);

    audioTracks.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await rtcClient.publish(audioTracks.localAudioTrack);
    console.log('rtcUID -> ', rtcUid);
    setRTCuid(rtcUid);
  };

  //------------------------------------------------------------------

  return (
    <div className="flex gap-4 flex-col justify-center items-center">
      This is the meeting id:{' '}
      <span className="px-2 bg-slate-500 rounded">{slug}</span>
      <div className="flex gap-4">
        <Button>Mute</Button>
        <Button className="bg-red-600 text-white hover:bg-red-800">
          Leave
        </Button>
        <Button onClick={handleUserJoined}>User button</Button>
      </div>
      <div className="flex gap-4">
        <div className="border-2 rounded-full p-10">
          <User size={64} />
          <span>user: {userId} - {RTCuid}</span>
        </div>
        <div className="border-2 rounded-full p-10">
          <User size={64} />
          <span>user: 123</span>
        </div>
      </div>
    </div>
  );
};

export default page;
