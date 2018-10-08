angular.module('SVM.Ecommerce.Pricing')
.controller('SVM.Ecommerce.Pricing.blade1Controller', ['$scope', 'SVM.Ecommerce.PricingApi', function ($scope, api) {
    var blade = $scope.blade;
    blade.title = 'SVM Pricing';

    blade.refresh = function () {
        api.get(function (data) {
            blade.data = data.result;
            blade.isLoading = false;
        });
    }

    blade.refresh();
}]);
