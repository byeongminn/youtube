import { gray } from "@/shared/styles/color";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  {
    color: gray[900],
    borderRadius: "0.75rem",
    padding: "0.75rem",
    backgroundColor: gray[200],
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
]);
