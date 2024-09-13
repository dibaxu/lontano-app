"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Navigate() {
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {isNotHomePage && (
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                inicio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <Link href='/actividades' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              actividades
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/agenda' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              agenda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/nosotros' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/contacto' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
