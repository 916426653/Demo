/**
 * Created by qingyun on 16/9/23.
 */
angular.module('phoneList')
.component('phoneList',{
    templateUrl:'temp/phone-list.html',
    controller:['$http',function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';
        $http.get('phones/phones.json').then(function (res) {
            self.phones=res.data;
        })
    }
]});