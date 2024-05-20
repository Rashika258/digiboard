import { atom } from "recoil";

export const optionsAtom = atom<CtxOptions>({
  key: "options",
  default: {
    lineColor: { r: 255, g: 255, b: 255,a: 1 },
    fillColor: { r: 255, g: 255, b: 255, a: 0 },
    lineWidth: 5,
    mode: "draw",
    shape: "line",
    selection: null,
  },
});
