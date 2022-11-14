interface SalaryBlockProps {
  value: string;
}

export const SalaryBlock = ({ value }: SalaryBlockProps) => {
  return (
    <>
      <p>Brutto, per year</p>
      <p>{value}</p>
    </>
  );
};
