const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-lg md:text-2xl font-bold group-hover:text-green-500 text-center transition-all">
        {text}
      </h1>
      <div className="w-32 h-1 bg-indigo-500 rounded-full"></div>
      {/* <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div> */}
    </div>
  );
};

export default Title;
