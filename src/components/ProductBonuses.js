import React from 'react';

function ProductBonuses({ portions, mices, bonuses }) {
  const declOfNum = (n, words) => {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    switch (n) {
      case (n > 10 && n < 20): return words[2];
      case (n1 > 1 && n1 < 5): return words[0];
      case (n1 === 1): return words[0];
      default: return words[2]
    }

  }

  return (
    <p className='product__bonus'>
        <span>
            <b>{portions}</b> {` `}
            { declOfNum(portions, ['порция', 'порции', 'порций']) }
        </span>

        <span>
            { mices > 1 && mices } {` `}
            { declOfNum(mices, ['мышь в подарок', 'мыши в подарок', 'мышей в подарок']) }
        </span>

        { bonuses.length > 0 && bonuses.map((b, i) => <span key={i}>{b}</span>) }
    </p>
  );
}

export default ProductBonuses;
