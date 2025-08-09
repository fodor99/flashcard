import { soundSprite, soundSpriteMap } from "@/utils/sound";
import { useCallback } from "react";

export function useSound() {
  return useCallback((name: keyof typeof soundSpriteMap) => {
    if (soundSpriteMap[name]) {
      soundSprite.play(name);
    } else {
      console.warn(`Sound "${name}" not found in sprite`);
    }
  }, []);
}