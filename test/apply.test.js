const expect = require('chai').expect;
const jsonPatch = require('../index');

describe('Apply method testing', () => {

    it('should add property to empty object', (done) => {
        let res = jsonPatch.apply({},
            [
                {op: 'add', path: '/c', value: ['foo', 'bar']}
            ]
        ).doc;
        expect(res).to.deep.equal({
            c: ['foo', 'bar']
        });
        done();
    });

    it('should remove property from object', (done) => {
        let res = jsonPatch.apply({a: '1', b: '2'},
            [{op: 'remove', path: '/a'}]
        ).doc;
        expect(res).to.deep.equal({
            b: '2'
        });
        done();
    });
});