# Laravel Vue eCommerce

This project is a full-featured eCommerce application built with **Laravel** (for backend logic and API management) and **Vue.js** (for the front-end UI). The application includes functionalities like product management, customer registration, order processing, payments, and more.

## Features

- **Product Catalog**: Browse and manage products.
- **Cart and Checkout**: Add items to the cart, proceed to checkout, and place orders.
- **Customer Management**: Customer profiles, addresses, and orders.
- **Payment Processing**: Integration with payment gateways for order payments.
- **Order Management**: Handle order creation, details, and processing.
- **Country and Address Handling**: Manage customer addresses linked to countries.

## Models and Migrations

The application consists of the following models and their corresponding database tables. Migrations for each model are created using the command:

```bash
php artisan make:model CartItem -m
php artisan make:model Country -m
php artisan make:model Customer -m
php artisan make:model CustomerAddress -m
php artisan make:model Order -m
php artisan make:model OrderDetail -m
php artisan make:model OrderItem -m
php artisan make:model Payment -m
php artisan make:model Product -m
```
 ## Models

CartItem:
    - Stores individual items added to the cart.

Country:
    - Manages the countries available for customer addresses.

Customer:
    - Stores customer information such as name, email, etc.

CustomerAddress:
    - Stores multiple addresses for a customer.

Order:
    - Represents a customer order with general details.

OrderDetail:
    - Stores detailed information about the order (total, tax, shipping info).

OrderItem:
    - Stores individual items within an order.

Payment:
    - Handles the payment process for each order.

Product:
    - Represents products available in the store, with details like price, description, etc.

This will create a model file in app/Models and a migration file in database/migrations.