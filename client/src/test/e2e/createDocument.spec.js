import faker from 'faker';
import config from './config';

module.exports = {
  'Create document': (browser) => {
    browser
     .url(config.url)
     .click('#login')
     .setValue('Input[name=email]', 'chinedu.ofor@andela.com')
     .setValue('Input[name=password]', 'netbeans')
     .click('button')
     .pause(5000)
     .assert.urlEquals('http://localhost:8080/app/document')
     .waitForElementVisible('body')
     .assert.elementPresent('#hero-btn')
     .click('.add')
     .pause(5000)
     .assert.urlEquals('http://localhost:8080/app/create')
     .waitForElementVisible('body')
     .setValue('Input[name="title"]', faker.lorem.word())
     .setValue('textarea[name="content"]', faker.lorem.words())
     .click('#access option[value="private"]')
     .assert.elementPresent('Button')
     .click('Button')
     .end();
  }
};

