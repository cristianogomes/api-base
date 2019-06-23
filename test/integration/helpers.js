require('module-alias/register');
const supertest = require('supertest');
const chai = require('chai');
const app = require('../../src/config/express');

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
