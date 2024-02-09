import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    color?: string;
    size?: number;
}

const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
`;

const ButtonFactory: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.className}
            style={props.style}
            text={props.text}
        />
    );
}

export default ButtonFactory;