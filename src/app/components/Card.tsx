import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`rounded-lg ${className?.includes('col-span-1') ? 'max-w-[215px]' : 'max-w-[616px]'}  ${className}`}>
      {children}
    </div>
  );
};

export default Card;