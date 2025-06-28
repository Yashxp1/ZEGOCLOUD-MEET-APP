'use client';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const page = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const containerRef = useRef<HTMLDivElement>(null);

  const appID = 68151614;
  const serverSecret = process.env
    .NEXT_PUBLIC_ZEGOCLOUD_SERVER_SECRET as string;

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
      turnOnCameraWhenJoining: false,
      showMyCameraToggleButton: false,
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

  const hasJoined = useRef(false);

  useEffect(() => {
    if (!containerRef.current) {
      console.log('container not found');
      return;
    }

    myMeet(containerRef.current);
  }, []);

  return <div ref={containerRef} className="h-full w-full"></div>;
};

export default page;
