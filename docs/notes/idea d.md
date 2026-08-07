Ще одна порада: краще не писати рядки вручну по всьому проєкту, а винести їх у константу або enum, щоб не отримати випадково Product, Products і products як три різні групи.

Наприклад:

export const ApiTags = {
Auth: "Auth",
Products: "Products",
Categories: "Categories",
Orders: "Orders",
} as const;# idea d
