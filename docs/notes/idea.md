Варіант 1 (Найкращий та найнадійніший): Створити свій zod.ts wrapper
Створи у проєкті окремий файл для Zod, де він один раз розширюється, і імпортуй z тільки з нього:

1. Створи файл src/lib/zod.ts:

TypeScript
import * as z from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export { z }; 2. У своїх файлах схем заміни імпорт:

TypeScript
// Замість: import * as z from "zod";
import { z } from "@/lib/zod"; // імпортуй свій підготовлений z# idea
