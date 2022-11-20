interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="rounded-lg uppercase max-w-full inline-block bg-bgButton text-[#FFFFFF] font-novaSemiBold text-[12px] py-[18px] px-[30px]">
      {children}
    </div>
  );
};
