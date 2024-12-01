const Backdrop: React.FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      className={`${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 top-[72px] h-screen w-screen bg-black/30 backdrop-blur-sm duration-700 md:hidden`}
    />
  );
};

export default Backdrop;
