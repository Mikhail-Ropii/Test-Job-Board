interface ButtonProps {
  children: React.ReactNode;
}

export const BlockTitle = ({ children }: ButtonProps) => {
  return (
    <p className=" mb-[10px] text-xxl font-novaBold text-mainText">
      {children}
    </p>
  );
};
