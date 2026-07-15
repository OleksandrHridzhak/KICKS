class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends CustomError {}
export class ValidationError extends CustomError {}
export class UnauthenticatedError extends CustomError {}
export class ForbiddenError extends CustomError {}
export class ConflictError extends CustomError {}

// У JavaScript об'єкт створюється класом, клас є об'єктом, бо є функцією,
// функція теж є об'єктом, об'єкт пам'ятає, який об'єкт його створив через
// constructor, читає властивість name цього об'єкта і записує її у власну
// властивість name. -- СhatGPT 12.07.2026
