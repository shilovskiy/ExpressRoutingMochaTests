/**
 * Created by Олег Шиловский on 19.01.2017.
 */
var supertest = require('supertest');
var assert = require('chai').assert;
var server  =supertest.agent('http://localhost:3000');


describe('when application  starts',()=>{
    it('should return Hello Express.js',(load)=> {
            server
                .get('/')
                .expect('Conten-type','text/plain')
                .expect(200)
                .end((err,res)=>{
                    assert.equal(res.status,200);
                    assert.equal(res.text,'Hello Express.js');
                    load();
                })


    });
    
});