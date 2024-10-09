import { PropsWithChildren } from "react";
import { HeroPattern } from "./HeroPattern";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <HeroPattern />
      <main>{children}</main>
    </div>
  );
};
