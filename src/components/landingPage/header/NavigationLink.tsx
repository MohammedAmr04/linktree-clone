function NavigationLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="2xl:px-[1.2rem] 2xl:py-[0.9rem] px-[1rem] py-[0.6rem] 2xl:text-lg text-[0.875rem] rounded-lg cursor-pointer hover:bg-button-1">
      {children}
    </div>
  );
}

export default NavigationLink;
