/**
 * Created by qingyun on 16/9/24.
 */
angular.module('phoneDetail')
.component('phoneDetail',{
    templateUrl:'temp/phone-detail.html',
    controller:['$http','$routeParams',function PhoneDetailController($http,$routeParams) {
        var self = this;
        self.setImage = function setImage(imageurl) {
            self.mainImageUrl=imageurl;
        }
        $http.get('phones/'+$routeParams.phoneId+'.json').then(function (res) {
            self.phone = res.data;
            self.setImage(self.phone.images[0]);

        })
    }]
});
