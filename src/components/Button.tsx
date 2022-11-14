interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="rounded bg-bgButton min-w-[127px] min-h-[52px]">
      {children}
    </div>
  );
};
