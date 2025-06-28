'use client';

import { Button } from '@/components/ui/button';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { User } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const page = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const containerRef = useRef<HTMLDivElement>(null);

  const appID = 68151614;
  const serverSecret = process.env.NEXT_PUBLIC_ZEGOCLOUD_SERVER_SECRET as string;

  const myMeet = async (element: HTMLDivElement) => {
    const { ZegoUIKitPrebuilt } = await import(
      '@zegocloud/zego-uikit-prebuilt'
    );

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      slug?.toString() || '',
      Date.now().toString(),
      'yashxp1'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            '?roomID=' +
            slug,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  useEffect(() => {
    if (!containerRef.current) {
      console.log('container not found');
      return;
    }

    myMeet(containerRef.current);
  }, [slug]);

  return (
    <div ref={containerRef} className="h-full w-full"></div>
    // <div className="flex gap-4 flex-col justify-center items-center">
    //   This is the meeting id:{' '}
    //   <span className="px-2 bg-slate-500 rounded">{slug}</span>
    //   <div className="flex gap-4">
    //     <Button>Mute</Button>
    //     <Button className="bg-red-600 text-white hover:bg-red-800">
    //       Leave
    //     </Button>
    //     <Button>User button</Button>
    //   </div>
    //   <div className="flex gap-4">
    //     <div className="border-2 rounded-full p-10">
    //       <User size={64} />
    //       <span>userID: 123</span>
    //     </div>
    //     <div className="border-2 rounded-full p-10">
    //       <User size={64} />
    //       <span>user: 123</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;
