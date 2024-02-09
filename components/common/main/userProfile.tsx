import React from 'react';
import styled from 'styled-components';

interface ProfileProps {
    name: string;
    position: string;
}

const Profile: React.FC<ProfileProps> = ({ name, position }) => {
    return (
        <ProfileContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
            <ViewChartButton>View Chart</ViewChartButton>
        </ProfileContainer>
    );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Position = styled.h2`
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ViewChartButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

