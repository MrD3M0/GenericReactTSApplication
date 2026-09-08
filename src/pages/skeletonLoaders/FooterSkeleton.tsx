import { Skeleton } from "@/components/ui/skeleton";

export default function FooterSkeleton() {
  return (
    <div className="w-full flex justify-center py-6">
      <Skeleton className="h-6 w-48" />
    </div>
  );
}
