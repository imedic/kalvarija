angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, uiGmapGoogleMapApi) {
  $scope.createAction = function() {
    $state.go('new-action');
  }
    $scope.map = { 
      center: { 
        latitude: 45, 
        longitude: -73 
      }, 
      zoom: 8 
    };

    uiGmapGoogleMapApi.then(function(maps) {
      console.log(maps);
  });
})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
    $http.get('http://localhost:8080/api/user/all').then(function(res){
      $scope.users = res.data;
    })
})

.controller('LoginCtrl', function($state, $scope, authService) {
  $scope.user = {}
  $scope.login = function(){
    authService.login($scope.user.phone).then(function(){
      $state.go("tab.dash")
    });
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, authService, $state) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function() {
    authService.logout();
    $state.go('login');
  }
})

.controller('NewActionCtrl', function($scope, $http) {

});
