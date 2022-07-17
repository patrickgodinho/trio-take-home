export type MenuItemType = {
  name: string;
  description: string;
  price: number;
  url: string;
};

export type MenuSectionType = {
  name: string;
  items: MenuItemType[];
};

export type RestaurantType = {
  menus: MenuSectionType[];
};
