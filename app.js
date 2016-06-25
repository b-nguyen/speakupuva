var app = angular.module('speakupuva', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello World!';
  $scope.posts = [
    {title: "post 1", upvotes: 5},
    {title: "post 2", upvotes: 2},
    {title: "post 3", upvotes: 15},
    {title: "post 4", upvotes: 9},
    {title: "post 5", upvotes: 4}
  ];
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ''){return;}
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes:0
    });
    $scope.title = '';
    $scope.link='';
  };
  $scope.incrementUpvotes = function(post){
    post.upvotes++;
  };
  $scope.categories = ['academics', 'arts', 'cios', 'general'];
}]);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      template: "<h1>We are home!</h1>"
    })
    .state('category', {
      url: "/category/{categoryName}",
      template: "<h1>We are in category {{category}}!",
      controller: function($scope, $stateParams) {
        $scope.category = $stateParams.categoryName;
      }

    })
});
