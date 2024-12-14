"use client";

import { Button } from "@/components/ui/button";
import { useDestinyProfile } from "@/hooks/useDestinyProfile";
import { useBungieSession } from "next-bungie-auth/client";
import { Skeleton } from "./ui/skeleton";

export const AuthHeader = () => {
  const session = useBungieSession();
  const profileQuery = useDestinyProfile();

  return (
    <div className="flex items-center justify-end gap-2">
      {profileQuery.isSuccess ? (
        <div>
          {profileQuery.data.bungieGlobalDisplayName}#
          {profileQuery.data.bungieGlobalDisplayNameCode}
        </div>
      ) : (
        <Skeleton className="h-6 w-20" />
      )}
      <Button
        disabled={session.isPending}
        onClick={() => {
          session.kill();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};
