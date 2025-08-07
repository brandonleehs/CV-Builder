import type { ReactNode } from "react";

export default function FormWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 min-[600px]:p-6 dark:bg-neutral-900">
      {children}
    </div>
  );
}
