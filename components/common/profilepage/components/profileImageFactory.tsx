import React from 'react';
import styled from 'styled-components';

interface ProfileImageProps {
    src: string;
    alt: string;
    size?: number;
}

const StyledImage = styled.img<ProfileImageProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0;
    padding: 0;
`;

const ProfileImageFactory: React.FC<ProfileImageProps> = ({src, alt, size = 50}) => {
    return <StyledImage size={size} src={src} alt={alt} />
}

export default ProfileImageFactory;