import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"

import { cn, getProvider } from "@/lib/utils"
import { PhantomProvider } from "@/types"
import { PublicKey } from "@solana/web3.js"

import { Button } from "./ui/button"

const ConnectWallet = ({ className }: { className?: string }) => {
  const [provider, setProvider] = useState(getProvider())
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!provider) {
      return
    }

    provider.on("connect", (publicKey: PublicKey) => {
      setIsConnected(provider.isConnected ?? false)
      console.log("Connected to Phantom wallet:", publicKey.toBase58())
    })

    provider.on("disconnect", () => {
      setIsConnected(provider.isConnected ?? false)
    })

    // return () => {
    //   provider.disconnect()
    // }
  }, [provider])

  const handleClick = useCallback(async () => {
    if (!provider) {
      toast.error("Phantom wallet not found.")
      window.open("https://phantom.app/", "_blank")
    } else {
      if (!isConnected) {
        try {
          await provider.connect()
          toast.success("Connected to Phantom wallet.")
        } catch (error) {
          toast.error("Failed to connect to Phantom wallet.")
        }
      } else {
        try {
          await provider.disconnect()
          toast.success("Disconnected from Phantom wallet.")
        } catch (error) {
          toast.error("Failed to disconnect from Phantom wallet.")
        }
      }
    }
  }, [provider, isConnected])

  return (
    <Button
      variant="violet_gradient"
      size="lg_rounded"
      onClick={handleClick}
      className={cn("font-medium", className)}
    >
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </Button>
  )
}

export default ConnectWallet
