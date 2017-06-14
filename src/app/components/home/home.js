angular.module('TakeAwaySaver.home', [])
.controller('homeCtrl', homeCtrl);
	//this.welcomeText = 'Welcome to TakeAwaySaver Home!';
	
	function homeCtrl ($scope, $mdDialog) {
	    $scope.status = '';
	    $scope.vm = {
              formData: {
                email: 'hello@takeawayweb.com',
               	password: 'foobar'
              }
          };
          $scope.signup = {
              formDatanew: {
                name: 'Demo',
                email: 'hello@takeawayweb.com',
               	password: 'foobar',
               	passwordagain: 'foobar'
              }
          };
    	$scope.showSignup = function(event) {
           $mdDialog.show({
              clickOutsideToClose: true,
              scope: $scope,        
              preserveScope: true,           
              template: '<md-dialog flex-gt-sm="50" flex="90">' +
                          '  <md-dialog-content>' +
                            '    <md-toolbar>' +
                            '      <div class="md-toolbar-tools">' +
                            '        <h2><span>Signup Form</span></h2>' +
                            '      </div>' +
                            '    </md-toolbar>' +
                            '    <md-content layout="row" layout-align="space-around" layout-padding="layout-padding" ng-cloak="ng-cloak" flex> '+
                            '      <form name="Form" flex>'+
                            '            <md-input-container class="md-block">'+
                            '              <label>Name</label>'+
                            '              <input type="text" name="name" ng-model="signup.formDatanew.name" placeholder="name" required=""/>'+
                            '              <div ng-messages="Form.email.$error" role="alert" multiple="">'+
                            '                <div ng-message="required" class="my-message">Please enter your email.</div>'+
                            '              </div>'+
                            '            </md-input-container>'+
                            '            <md-input-container class="md-block">'+
                            '              <label>Email</label>'+
                            '              <input type="text" name="email" ng-model="signup.formDatanew.email" placeholder="Login" required=""/>'+
                            '              <div ng-messages="Form.email.$error" role="alert" multiple="">'+
                            '                <div ng-message="required" class="my-message">Please enter your email.</div>'+
                            '              </div>'+
                            '            </md-input-container>'+
                            '            <md-input-container class="md-block">'+
                            '              <label>Password</label>'+
                            '             <input type="password" name="password" ng-model="signup.formDatanew.password" placeholder="Password" required="" md-maxlength="16"/>'+
                            '              <div ng-messages="Form.password.$error" role="alert" multiple="">'+
                            '                <div ng-message="required" class="my-message">Please enter your password.</div>'+
                            '               <div ng-message="md-maxlength" class="my-message">Too long.</div>'+
                            '             </div>'+
                            '            </md-input-container>'+
                            '            <md-input-container class="md-block">'+
                            '              <label>Re-Enter Password</label>'+
                            '             <input type="password" name="passwordagain" ng-model="signup.formDatanew.passwordagain" placeholder="Re-Enter Password" required="" md-maxlength="16"/>'+
                            '              <div ng-messages="Form.passwordagain.$error" role="alert" multiple="">'+
                            '                <div ng-message="required" class="my-message">Please enter your password.</div>'+
                            '               <div ng-message="md-maxlength" class="my-message">Too long.</div>'+
                            '             </div>'+
                            '            </md-input-container>'+
                            '            <md-button ng-disabled="!Form.$valid" ng-click="signup.submit()" class="md-raised md-primary">&nbsp Sign Up &nbsp</md-button>'+
                            '          </form>'+
                            '    </md-content>' +
                          '  </md-dialog-content>' +
                          '</md-dialog>',
              controller: function homeCtrl($scope, $mdDialog) {
                 $scope.closeDialog = function() {
                    $mdDialog.hide();
                 }
              }
           });
        };
        $scope.showCustom = function(event) {
           $mdDialog.show({
              clickOutsideToClose: true,
              scope: $scope,        
              preserveScope: true,           
              template: '<md-dialog flex-gt-sm="50" flex="90">' +
                          '  <md-dialog-content>' +
                            '    <md-toolbar>' +
                            '      <div class="md-toolbar-tools">' +
                            '        <h2><span>Login Form</span></h2>' +
                            '      </div>' +
                            '    </md-toolbar>' +
                            '    <md-content layout="row" layout-align="space-around" layout-padding="layout-padding" ng-cloak="ng-cloak" flex> '+
                            '      <form name="Form" flex>'+
                            '            <md-input-container class="md-block">'+
                            '              <label>Email</label>'+
                            '              <input type="text" name="email" ng-model="vm.formData.email" placeholder="login" required=""/>'+
                            '              <div ng-messages="Form.email.$error" role="alert" multiple="">'+
                            '                <div ng-message="required" class="my-message">Please enter your email.</div>'+
                            '              </div>'+
                            '            </md-input-container>'+
                            '            <md-input-container class="md-block">'+
                            '              <label>Password</label>'+
                            '             <input type="password" name="password" ng-model="vm.formData.password" placeholder="password" required="" md-maxlength="16"/>'+
                            '              <div ng-messages="Form.password.$error" role="alert" multiple="">'+
                            '                <div ng-message="required" class="my-message">Please enter your password.</div>'+
                            '               <div ng-message="md-maxlength" class="my-message">Too long.</div>'+
                            '             </div>'+
                            '            </md-input-container>'+
                            '            <md-button ng-disabled="!Form.$valid" ng-click="vm.submit()" class="md-raised md-primary">&nbsp Login &nbsp</md-button>'+
                            '          </form>'+
                            '    </md-content>' +
                          '  </md-dialog-content>' +
                          '</md-dialog>',
              controller: function homeCtrl($scope, $mdDialog) {
                 $scope.closeDialog = function() {
                    $mdDialog.hide();
                 }
              }
           });
        };
	}