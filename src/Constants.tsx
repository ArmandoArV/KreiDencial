import kreiBlanco from "./images/kreiBlanco.png";
import kreiGrey from "./images/kreiGrey.png";

interface HeaderItem {
  id: number;
  name: string;
  link?: string;
}

interface Logos {
  name: string;
  image: string;
}

interface Routes {
  [key: string]: {
    id: number;
    link: string;
  }[];
}

interface Medals {
  id: number;
  title: string;
  image: string;
  isActive: boolean;
}

export const apiURL = "https://deapco.wixsite.com/kreidencial";

export const routes: Routes = {
  HOME: [
    {
      id: 1,
      link: "/",
    },
  ],
  REGISTER: [
    {
      id: 2,
      link: "/register",
    },
  ],
  PROFILE: [
    {
      id: 3,
      link: "/profile",
    },
  ],
  DASHBOARD: [
    {
      id: 4,
      link: "/dashboard",
    },
  ],
};

export const headerItems: HeaderItem[] = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Registro",
    link: "/register",
  },
];

export const headerLogginItems: HeaderItem[] = [
  {
    id: 1,
    name: "Home",
    link: routes.HOME[0].link,
  },
  {
    id: 2,
    name: "Profile",
    link: routes.PROFILE[0].link,
  },
  {
    id: 3,
    name: "Logout",
    link: "/logout",
  },
];

export const headerAdminItems: HeaderItem[] = [
  {
    id: 1,
    name: "Home",
    link: routes.HOME[0].link,
  },
  {
    id: 2,
    name: "Profile",
    link: routes.PROFILE[0].link,
  },
  {
    id: 3,
    name: "Dashboard",
    link: routes.DASHBOARD[0].link,
  },
];

export const logos: Logos[] = [
  {
    name: "kreiBlanco",
    image: kreiBlanco,
  },
];

export const medals: Medals[] = [
  {
    id: 1,
    title: "ArKREI",
    image: kreiGrey,
    isActive: true,
  },
  {
    id: 1,
    title: "ArKREI",
    image: kreiGrey,
    isActive: true,
  },  {
    id: 1,
    title: "ArKREI",
    image: kreiGrey,
    isActive: true,
  },  {
    id: 1,
    title: "ArKREI",
    image: kreiGrey,
    isActive: true,
  },
];
