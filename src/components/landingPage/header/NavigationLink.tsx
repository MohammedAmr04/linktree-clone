function NavigationLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[1.2rem] py-[0.9rem] text-lg rounded-lg cursor-pointer hover:bg-button-1">
      {children}
    </div>
  );
}

export default NavigationLink;
