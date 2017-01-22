/**
 * Created by Олег Шиловский on 19.01.2017.
 */
var supertest = require('supertest');
var assert = require('chai').assert;
var server  =supertest.agent('http://localhost:3000');


describe('when getting missing page',()=>{
    it('should return 404 error',(load)=> {
        server
            .get('/notfoundpage')
            .expect('Conten-type','text/plain')
            .expect(404)
            .end((err,res)=>{
                assert.equal(res.status,404);
                load();
            })


    });


});