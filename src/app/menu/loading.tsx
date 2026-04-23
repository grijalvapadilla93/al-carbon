export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-surface-dim">
      {/* Navbar placeholder */}
      <div className="h-20 bg-surface-high/50 animate-pulse" />

      {/* Hero skeleton */}
      <div className="h-screen flex items-center justify-center">
        <div className="space-y-6 text-center">
          <div className="h-4 w-48 bg-surface-high mx-auto rounded animate-pulse" />
          <div className="h-24 w-80 md:w-[500px] bg-surface-high mx-auto rounded animate-pulse" />
          <div className="h-6 w-96 bg-surface-high mx-auto rounded animate-pulse" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-8 py-24 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 h-[500px] bg-surface-high rounded animate-pulse" />
          <div className="md:col-span-5 space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 w-48 bg-surface-high rounded animate-pulse" />
                <div className="h-4 w-full bg-surface-high rounded animate-pulse" />
                <div className="h-6 w-20 bg-surface-high rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
