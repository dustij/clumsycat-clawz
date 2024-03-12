import toast from "react-hot-toast"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

const ConnectWallet = ({ className }: { className?: string }) => {
  return (
    <Button
      variant="violet_gradient"
      size="lg_rounded"
      onClick={() => toast.error("This feature is coming soon")}
      className={cn(className)}
    >
      Connect Wallet
    </Button>
  )
}

export default ConnectWallet
