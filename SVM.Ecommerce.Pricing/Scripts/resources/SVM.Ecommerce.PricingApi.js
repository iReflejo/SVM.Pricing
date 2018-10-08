angular.module('SVM.Ecommerce.Pricing')
.factory('SVM.Ecommerce.PricingApi', ['$resource', function ($resource) {
    return $resource('api/SVM.Ecommerce.Pricing');
}]);
