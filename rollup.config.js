import cjs from 'rollup-plugin-cjs-es';
import node from 'rollup-plugin-node-resolve';

export default [
    {
        entry: 'index.js',
        plugins: [
            node(),
            cjs({
				nested: true,
				exportType: "default"
			})
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
