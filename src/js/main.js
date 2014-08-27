require.config({
    paths: {
        jquery: 'lib/jquery'
    },
    packages: ['mod', 'sod']

});

require(['mod']);
require(['sod']);


require(['jquery', 'one', 'two', 'three'], function ($, one, two, three) {
    $("body").text(one.a + two.b + three.c);
});