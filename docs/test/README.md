# Тестування працездатності системи

Тестування сервісу за допомогою [Swagger](https://swagger.io/).

## Cтруктура Swagger

![structure.png](./structure.png)

## Отримання користувача (GET)

### Успішне отримання списку всіх користувачів

![get-all-users.png](./get-all-users.png)

### Успішне отримання даних одного користувача

![get-user-by-id_success.png](./get-user-by-id_success.png)

### Спроба отримати дані неіснуючого користувача

![get-user-by-id_failed.png](./get-user-by-id_failed.png)

## Створення користувача (POST)

### Успішне створення користувача

![ccreate-user_success.png](./create-user_success.png)

### Спроба створити користувача з неповними даними

![create-user_validation.png](./create-user_validation.png)

## Оновлення користувача (PUT)

### Успішне оновлення інформації про користувача

![update-user_success.png](./update-user_success.png)

### Спроба оновити дані неіснуючого користувача

![update-user_failed.png](./update-user_failed.png)

## Видалення користувача (DELETE)

### Успішне видалення користувача з системи

![delete-user_success.png](./delete-user_success.png)

### Спроба видалити неіснуючого користувача

![delete-user_failed.png](./delete-user_failed.png)

