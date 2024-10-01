
# Project Title

A brief description of what this project does and who it's for

# Приложение для отображения счетчиков воды

Это тестовый проект для позиции Frontend-разработчика, одностраничное приложение (SPA), разработанное с использованием React, TypeScript и MobX State Tree. Оно взаимодействует с внешним API для получения и отображения данных счетчиков воды с возможностью прокрутки данных, обработки пагинации, управления удалением счетчиков и оптимизации получения адресов.

Ключевые возможности:

	• Отображение списка счетчиков с постраничной загрузкой (20 элементов на странице).
	• Получение и оптимизация адресов для каждого счетчика.
	• Удаление счетчиков с плавным пользовательским интерфейсом.
	• Адаптивный дизайн с внутренней прокруткой таблицы при фиксированной шапке.

### Используемые технологии

Основной стек технологий:

	• React: для построения пользовательского интерфейса и управления структурой компонентов.
	• TypeScript: для статической типизации и улучшения качества кода.
	• MobX State Tree (MST): для управления состоянием и поддержания структурированной архитектуры приложения.
	• Styled-Components: для стилизации компонентов (опционально, но используется в проекте).
	• Prettier: для поддержания единого стиля оформления кода.

### API

Приложение взаимодействует со следующими API:

- ***Meters:***

    `GET` http://showroom.eis24.me/api/v4/test/meters/

        - Получение списка счетчиков воды:

        Параметры:

        {
            limit: number,
            offset: number
        }

- ***Adresses:***

    `GET` http://showroom.eis24.me/api/v4/test/areas/

        - Получение адресов на основе ID счетчиков, с оптимизацией для избежания повторных запросов.

        Параметры:

        {
            id__in: string
        }

    `DELETE`  http://showroom.eis24.me/api/v4/test/meters/:meterId/

        - Удаление счетчика по его ID.


### Установка и запуск проекта

Для локального запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/Taashev/eis-meters.git
    ```
2. Перейдите в папку проекта:
    ```bash
    cd eis-meters
    ```
3. Установите зависимости:
    ```bash
    npm install
    ```
4. Запустите проект:
    ```bash
    npm start
    ```

Это запустит dev-сервер, и приложение будет доступно по адресу http://localhost:3000.

### Структура проекта

	• src/: содержит исходный код проекта.
	• components/: переиспользуемые компоненты, такие как таблица со счетчиками, кнопка удаления и др.
	• page/: страницы приложения (маршруты) app, meters, notFound.
	• stores/: определение MobX State Tree для управления состоянием приложения.
	• types/: типы сущностей таких как meter, adddress, theme.
	• utils/: константы, вспомогательные функции и методы для работы с API.
	• styles/: глобальные стили и темы (используются styled-components).

### Форматирование кода

В проекте используется Prettier для поддержания единого стиля кода. Конфигурация Prettier следующая:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 80
}
```

### Возможные улучшения

    • Адаптивность под мобильные устройства
	• Добавить unit-тесты для ключевых компонентов и действий в сторе.
	• Реализовать обработку ошибок при запросах к API.
	• Улучшить доступность и опыт взаимодействия для пользователей с ограниченными возможностями.


[GitHub Pages](https://taashev.github.io/eis-meters/)
