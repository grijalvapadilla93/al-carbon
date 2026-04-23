"use client"

import { useEffect } from "react"

/**
 * ScrollRevealProvider
 * ----------------
 * Sets history.scrollRestoration = 'manual' so the browser never
 * restores scroll position on back/forward navigation.
 */
export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
  }, [])

  return <>{children}</>
}
