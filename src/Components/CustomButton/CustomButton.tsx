import { Button } from '@mui/material';

type CustomButtonPros = {
  variant: 'text' | 'outlined' | 'contained';
  title: string;
  startIcon?: JSX.Element;
  onClick?: () => void;
  sx?: Record<string, string | number>;
};

function CustomButton({
  variant,
  startIcon,
  title,
  onClick,
}: CustomButtonPros) {
  return (
    <Button variant={variant} startIcon={startIcon} onClick={onClick}>
      {title}
    </Button>
  );
}

export default CustomButton;
