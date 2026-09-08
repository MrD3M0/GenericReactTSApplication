import { Skeleton } from "@/components/ui/skeleton";

export default function ExperienceSkeleton() {
  return (
    <div className="w-full flex">
      <div className="hidden md:flex h-full w-full flex-1"></div>
      <div className="w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50 px-4 py-4 space-y-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-4 w-40" />
            </div>
            <div className="pl-9 space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex h-full w-full flex-1"></div>
    </div>
  );
}
