// Page.tsx
// app/(platform)/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-white aspect-video rounded-xl" />
        <div className="bg-white aspect-video rounded-xl" />
        <div className="bg-white aspect-video rounded-xl" />
      </div>
      <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min mt-4" />
    </>
  )
}
