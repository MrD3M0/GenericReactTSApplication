import { Skeleton } from "@/components/ui/skeleton";

export default function StackSkeleton() {
  return (
    <div className="w-full flex justify-center bg-black border-b border-gray-500/50">
      <div className="w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50 p-4 space-y-6">
        {Array.from({ length: 4 }).map((_, cat) => (
          <div key={cat} className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-9 rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
