
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-muted mb-4">{role}</p>
      {bio && <p className="text-sm text-gray-600">{bio}</p>}
    </div>
  );
};

export default TeamMember;
