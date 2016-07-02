/**
 * Created by HC on 2016/6/27.
 */
'use strict';

var BlogApp = require('./app.js');

BlogApp
    .controller('ArticleCtrl', ['$scope', 'ArticleService', 'CommonService',
        function($scope, ArticleService, CommonService) {

            $scope.totalItems = 0;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.pageSize = 10 ;   //每页大小
            function getPageData() {
                $scope.params = "pageSize="+$scope.pageSize+"&pageNum="+($scope.currentPage);
                ArticleService.listArticle($scope.params).success(function (data) {
                    $scope.articles = data.data.list;
                    $scope.totalItems = data.data.total;
                });
            }
            getPageData();
            $scope.pageChanged = function() {
                getPageData();
            };
            $scope.delete = function (id) {
                CommonService.confirm("确定删除？", function () {
                    ArticleService.delete(id).success(function (data) {
                        CommonService.show(data);
                    })
                })
            };
        }
    ])
    .controller('ArticleEditCtrl', ['$scope', function($scope) {

        console.log("test ArticleEditCtrl");

    }])
    .controller('ArticleDetailCtrl', ['$scope', function($scope) {

        console.log("test ArticleDetailCtrl");

    }]);