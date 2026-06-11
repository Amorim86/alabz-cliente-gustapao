const APP_VERSION = 'v2';

export default function VersionBadge() {
  return (
    <div className="fixed bottom-2 left-2 z-50 text-[10px] text-white/50 bg-black/50 px-2 py-1 rounded select-none pointer-events-none">
      {APP_VERSION}
    </div>
  );
}
