interface SectionTitleProps {
  title: React.ReactNode;
  className?: string;
}

const SectionTitle = ({
  title,
  className = "",
}: SectionTitleProps) => {
  return (
    <h2
      className={`
        heading
        text-center
        uppercase
        tracking-[1%]
        text-[#2E2C76]
        text-[32px]
        leading-[42px]
        md:leading-[50px]
        lg:text-[52px]
        lg:leading-[64px]
        ${className}
      `}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;