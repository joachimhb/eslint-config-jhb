const roboter = require('roboter');

roboter
  .workOn('server')
  .equipWith(task => {
    task('universal/license', {
      compatible: [
        'MIT',
        'MIT*',
        'MIT Licensed. http://www.opensource.org/licenses/mit-license.php',
        'MIT/X11',
        'ISC',
        'BSD',
        'BSD-2-Clause',
        'BSD-3-Clause',
        'Apache-2.0',
        'Apache-2.0*',
        'LGPL-2.1+',
        'Public Domain',

        // 'CC-BY-4.0',

        // combinations
        // '(MIT AND CC-BY-3.0)',
        'BSD-3-Clause OR MIT',
        '(WTFPL OR MIT)',
        '(GPL-2.0 OR MIT)',

        'WTFPL',
        'UNKNOWN',
        'Unlicense'
      ]
    });

    task('universal/analyze', {
      src: ['**/*.js', '!node_modules/**/*.js'],
      rules: '.eslintrc.json'
    });
  })
  .start();
