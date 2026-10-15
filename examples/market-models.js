// Market Corner's own models: plain data in a module of their own, so `node check.mjs --sheets
// examples/market-models.js` can draw them.
import { model, MODEL_LIBRARY, ModelCatalog } from '../pixel-engine.js';

export const fruitStall = model({
  id: 'fruit-stall',
  about: 'The market stall under a green awning, two baskets of fruit on its counter',
  tags: ['town', 'market'],
  palette: { wood: 'orange', cloth: 'green', cloth2: 'white', top: 'sand', basket: 'red', fruit: 'orange', fruit2: 'lime' },
  parts: [
    { use: 'market-stall' }, // its slots take ours of the same name: the awning turns green
    ...[-0.45, 0.4].flatMap((x, i) => [
      { name: `basket${i}`, cyl: [0.56, 0.14, 0.4], at: [x, 1.01, 0.05], top: 1.25, c: 'basket' },
      ...[-0.17, 0, 0.17].map((dx, k) => ({ ball: [0.18, 0.18, 0.18], on: `basket${i}`, at: [dx, 0, 0], c: (i + k) % 2 ? 'fruit2' : 'fruit' })),
    ]),
  ],
});

// Where the game's ids resolve: the library and ours (buildModel's `catalog`).
export const MODELS = new ModelCatalog([...MODEL_LIBRARY.all(), fruitStall]);
