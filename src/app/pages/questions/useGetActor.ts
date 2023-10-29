'use client'

import { useState, useEffect } from "react"
import {
  getStepA4Actor,
  getStepB4Actor,
  getStepC4Actor,
  getStepAActorCode,
  getStepBActorCode,
  actorList
} from "@common/data"
import { useGlobalContext } from "@/app/context/store"

export const useGetActor = () => {
  const { stage, firstSelected, secondSelected } = useGlobalContext()
  const [actors, setActors] = useState<any>(null)
  const getActorList = () => {
    if(stage === 0) return getStepA4Actor()
    if(stage === 1) return getStepB4Actor()
    if(stage === 2) {
      // @ts-ignore
      const stepACode = getStepAActorCode(firstSelected.name)
      // @ts-ignore
      const stepBCode = getStepBActorCode(stepACode, secondSelected.name)
      return getStepC4Actor(stepACode, stepBCode)
    }
  }
  useEffect(() => {
    const actors = getActorList()
    setActors(actors)
  }, [])
  return actors
}
