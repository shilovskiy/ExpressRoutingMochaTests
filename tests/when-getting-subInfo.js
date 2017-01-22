/**
 * Created by Олег Шиловский on 19.01.2017.
 */
var supertest = require('supertest');
var assert = require('chai').assert;
var server  =supertest.agent('http://localhost:3000');


describe('when getting sub/xeferf/4rcg43',()=>{
    it('should return full url',(load)=> {
        server
            .get('/sub/xeferf/4rcg43')
            .expect('Conten-type','text/plain')
            .expect(200)
            .end((err,res)=>{
                assert.equal(res.status,200);
                assert.equal(res.text,'You requested URI: http://localhost:3000/sub/xeferf/4rcg43');
                load();
            })


    });


});