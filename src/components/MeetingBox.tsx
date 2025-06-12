import { icons, MessageSquarePlus, Video } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const chatMeet = [
  {
    type: 'meet',
    label: 'Start a meeting',
    color: 'bg-green-400',
    icon: <Video size={32} />,
  },
  {
    type: 'chat',
    label: 'Start chatting',
    color: 'bg-orange-400',
    icon: <MessageSquarePlus size={32} />,
  },
];

const MeetingBox = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center w-full">
      {chatMeet.map((i, idx) => (
        <div
          key={idx}
          className={`${i.color} w-full items-center justify-center`}
        >
          <div className="flex flex-col gap-4 py-10 justify-center items-center">
            <span>{i.icon}</span>
            <h1 className="text-xl">{i.label}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingBox;
