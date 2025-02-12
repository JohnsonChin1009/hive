export default function SkeletonCard() {
  return (
    <div className="w-full sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[22vw] 2xl:w-[20vw] 
                    md:min-h-[450px] 
                    px-3 sm:px-4 py-3 sm:py-4 
                    flex flex-col gap-3 sm:gap-4 
                    items-center border-[2px] border-[#1C1C1C]/10
                    dark:border-[#adadad]/10 rounded-[24px] 
                    bg-white dark:bg-[#1C1C1C]/10 
                    dark:backdrop-blur-md justify-between
                    animate-pulse">
      {/* Skeleton Banner */}
      <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[210px] 2xl:h-[250px] 
                      bg-gray-200 dark:bg-gray-700 rounded-[16px]" />

      <div className="w-full space-y-2">
        {/* Skeleton Title and Host */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        </div>

        {/* Skeleton Event Details */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>

          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20" />
          </div>
        </div>
      </div>

      {/* Skeleton Button */}
      <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
    </div>
  );
} 