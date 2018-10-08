//Call this to register our module to main application
var moduleTemplateName = "SVM.Ecommerce.Pricing";

if (AppDependencies != undefined) {
    AppDependencies.push(moduleTemplateName);
}

angular.module(moduleTemplateName, [])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('workspace.SVM.Ecommerce.Pricing', {
                url: '/SVM.Ecommerce.Pricing',
                templateUrl: '$(Platform)/Scripts/common/templates/home.tpl.html',
                controller: [
                    '$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
                        var newBlade = {
                            id: 'blade1',
                            controller: 'SVM.Ecommerce.Pricing.blade1Controller',
                            template: 'Modules/$(SVM.Ecommerce.Pricing)/Scripts/blades/helloWorld_blade1.tpl.html',
                            isClosingDisabled: true
                        };
                        bladeNavigationService.showBlade(newBlade);
                    }
                ]
            });
    }
])
.run(['$rootScope', 'platformWebApp.mainMenuService', 'platformWebApp.widgetService', '$state',
    function ($rootScope, mainMenuService, widgetService, $state) {
        //Register module in main menu
        var menuItem = {
            path: 'browse/SVM.Ecommerce.Pricing',
            icon: 'fa fa-cube',
            title: 'SVM Pricing',
            priority: 100,
            action: function () { $state.go('workspace.SVM.Ecommerce.Pricing') },
            permission: 'SVM.Ecommerce.PricingPermission'
        };
        mainMenuService.addMenuItem(menuItem);
    }
]);
