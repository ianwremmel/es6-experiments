import {assert} from 'chai';
import Proof from '../../src/proof';

describe(`Proof`, () => {
  it(`proves mocha works`, () => {
    const p = new Proof();
    assert.isTrue(p.get());
  });
});
