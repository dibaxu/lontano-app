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
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/nosotros' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                nosotros
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ul className='flex justify-center py-4 space-x-6 text-lg'>
        {isNotHomePage && (
          <li>
            <Button asChild variant='outline'>
              <Link href='/'>inicio</Link>
            </Button>
          </li>
        )}
        <li>
          <Button asChild variant='outline'>
            <Link href='/actividades'>actividades</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant='outline'>
            <Link href='/agenda'>agenda</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant='outline'>
            <Link href='/contacto'>contacto</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant='outline'>
            <Link href='/nosotros'>nosotros</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
