interface SectionBadgeProps {
  label: string;
  className?: string;
}

const SectionBadge = ({
  label,
  className = "",
}: SectionBadgeProps) => {
  return (
    <h6
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#2E2C76]
        px-4
        py-1
        text-center
        text-xs
        font-semibold
        tracking-[1%]
        text-white
        subHeading
        lg:text-sm
        ${className}
      `}
    >
      {label}
    </h6>
  );
};

export default SectionBadge;