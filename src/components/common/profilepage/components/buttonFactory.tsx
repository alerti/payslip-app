import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    color?: string;
    size?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
}

const ButtonFactory: React.FC<ButtonProps> = ({text, onClick, disabled, className, type, style, color, size, textAlign}) => {
    const buttonStyle = {
        color: color,
        fontSize: `${size}px`,
        textAlign: textAlign,
        ...style
    };

    return <button style={buttonStyle} type={type} onClick={onClick} disabled={disabled} className={className}>{text}</button>
}

export default ButtonFactory;