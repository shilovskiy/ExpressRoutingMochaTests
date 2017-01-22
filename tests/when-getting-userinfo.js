/**
 * Created by Олег Шиловский on 19.01.2017.
 */
var supertest = require('supertest');
var assert = require('chai').assert;
var server  =supertest.agent('http://localhost:3000');


describe('when getting user info',()=>{
    it('should return "Hello stranger !" for empty username',(load)=> {
            server
                .get('/hello')
                .expect('Conten-type','text/plain')
                .expect(200)
                .end((err,res)=>{
                    assert.equal(res.status,200);
                    assert.equal(res.text,'Hello stranger !');
                    load();
                })


    });


    it('should return "Hello droid !" for /hello/droid request',(load)=> {
        server
            .get('/hello/droid')
            .expect('Conten-type','text/plain')
            .expect(200)
            .end((err,res)=>{
                assert.equal(res.status,200);
                assert.equal(res.text,'Hello droid!');
                load();
            })


    });

});