import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsSkeleton() {
  return (
    <div className="w-full bg-black border-b border-gray-500/50">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 w-[90%] md:w-[80%] lg:w-[40%] border-l border-r border-gray-500/50">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`w-full ${i % 2 !== 0 ? "border-l" : ""} border-gray-500/50`}
          >
            <div className="flex w-full items-center gap-4 border-b border-gray-500/50 p-4">
              <Skeleton className="h-6 w-6 shrink-0" />
              <Skeleton className="h-4 flex-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
