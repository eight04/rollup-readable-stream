import cjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';

export default [
    {
        entry: 'index.js',
        plugins: [
            node(),
            cjs()
        ],
        external: [
            'buffer',
            'events',
            'stream',
            'util'
        ],
        targets: [
            { dest: 'bundle.js', format: 'cjs' }
        ]
    }
];
