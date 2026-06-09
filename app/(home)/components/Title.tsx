import { cn } from "@/lib/utils";

const Title = ({
  text,
  subtitle,
  number,
  className,
}: {
  text: string;
  subtitle?: string;
  number?: string;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-3", className)}>
      {number && (
        <span className="text-xs md:text-sm font-mono tracking-widest text-green-500/80 uppercase">
          {number}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center font-display">
        {text}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-400 text-center max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 pt-1">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-green-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <div className="h-px w-16 bg-gradient-to-r from-green-500 via-indigo-500 to-transparent" />
      </div>
    </div>
  );
};

export default Title;
