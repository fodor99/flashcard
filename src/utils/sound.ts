// src/audio/sounds.ts
import { Howl } from "howler";
import soundFile from "../../public/sounds/soundsprite.mp3";

// Sprite: név -> [kezdő idő ms, hossz ms]
export const soundSpriteMap: Record<string, [number, number]> = {
  success: [0, 1000],
  error: [1000, 1000]
};

export const soundSprite = new Howl({
  src: [soundFile],
  sprite: soundSpriteMap,
  volume: 0.5,
});