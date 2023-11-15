/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

module.exports = {
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      on ('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            username: faker.person.firstName() + `${randomNumber}`,
            password: 'P@ssw0rd'
          };
        }
      });
    },
  },
};
