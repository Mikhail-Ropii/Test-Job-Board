interface SalaryBlockProps {
  value: string;
}

export const SalaryBlock = ({ value }: SalaryBlockProps) => {
  return (
    <div className="lg:flex flex-col-reverse lg:min-w-max">
      <p className="font-novaRegular text-m text-mobileMain text-opacity-80">
        Brutto, per year
      </p>
      <p className="text-l text-mainText font-novaBold"> &#8364; {value}</p>
    </div>
  );
};
