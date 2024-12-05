# SimpleBlog
A simple Blog developed using:
- Laravel 11
- React
- Inertia

## Project Steps
- Create new Laravel project ```Laravel new SimpleBlog``` (Without StarterKit + PEST + SQLITE)
- Add React, React Dom
```
npm i react, react-dom
```
- Add [React Vite](https://laravel.com/docs/11.x/vite#react)
```
npm install --save-dev @vitejs/plugin-react
```
- [Inertia](https://inertiajs.com/server-side-setup) Server-side setup
```
composer require inertiajs/inertia-laravel
```
- Create app.blade.php including vite & Inertia directives/scripts
- Run ```php artisan inertia:middleware``` && follow remaining steps as described in documentation

