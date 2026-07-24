# Cart Feature Backend Implementation

## Proposed Changes

### Database Schema (Prisma)

#### [MODIFY] [schema.prisma](file:///c:/Users/userstudent/dev/kicks/apps/backend/prisma/schema.prisma)

- **Крок 1: Додавання інфраструктури у БД**
  - Прописати модель `CartItem` у файлі `schema.prisma`:
    - `id`: Унікальний ідентифікатор запису елемента кошика
    - `userId`: Ідентифікатор користувача
    - `productVariantId`: Ідентифікатор варіанту товару
    - `variantSizeId`: Ідентифікатор розміру (size)
    - `quantity`: Кількість товару (`Int @default(1)`)
    - `createdAt`: Дата створення запису (`DateTime @default(now())`)
    - `@@unique([userId, productVariantId, variantSizeId])`: Унікальне поєднання користувача, варіанту товару та розміру

---

### API Endpoints

- **Крок 2: Додавання ендпоінтів для кошика**

| Метод | URL | Що робить | Приймає | Повертає |
| --- | --- | --- | --- | --- |
| `POST` | `/cart/items` | Додає товар у кошик | `productVariantId`, `variantSizeId`, `quantity` у body (`userId` з middleware) | Створений об'єкт `CartItem` |
| `GET` | `/cart/items` | Повертає всі товари користувача в кошику | Нічого (`userId` з middleware) | Список усіх товарів у кошику (об'єктом) |
| `DELETE` | `/cart/items/:cartItemId` | Видаляє елемент із кошика | `:cartItemId` в URL params (нічого у body) | `204 No Content` |

## Verification Plan

### Automated Tests
- Перевірка валідності схеми Prisma: `npx --prefix apps/backend prisma validate`
