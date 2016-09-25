/**
 * Created by qingyun on 16/9/24.
 */
angular.module('core')
.filter('checkmark',function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    }
});