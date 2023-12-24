export interface Props{
    children: React.ReactNode;
  }
export interface EventProps{
    event: React.FormEvent<HTMLFormElement>;
  }
  export interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
  }
export interface TweetBtnProps {
    label: string;
}
export interface HeaderProps {
    label: string;
}
export interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}
export interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
  }
  
export interface EditModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }
  export interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
  }
  export interface DropzoneProps {
    onChange: (base64: string) => void;
    label: string;
    value?: string;
    disabled?: boolean;
  }