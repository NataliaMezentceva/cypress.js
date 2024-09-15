describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала Войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // После авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
     
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('gean@dolnikov.ru'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввела  логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала Войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // После авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    it('Логин большими буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела логин большими буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
    it('Проверка восствновления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#forgotEmailButton').click(); // Нажала восст. пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Вввела посту для восст. 
        cy.get('#restoreMessageButton').click(); // Нажала отпр. код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
 })
 
